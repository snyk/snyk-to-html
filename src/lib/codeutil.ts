import * as orderBy from 'lodash.orderby';
import * as path from 'node:path';
import * as events from 'node:events';
import * as fs from 'node:fs';
import * as readline from 'node:readline';

const codeSeverityMap = {
  error: 'high',
  warning: 'medium',
  info: 'low',
  note: 'low',
};
type codeSource = {
  codelineno: number;
  block: boolean;
  codesource: string;
  codepremarker: string;
  codemarker: string;
  codepostmarker: string;
};

async function processCodeLine(filePath, region) {
  try {
    const endLine = region.endLine;
    const startLine = region.startLine;
    const multiLine = region.startLine == endLine ? false : true;
    const codeString: Array<codeSource> = [];
    let lineNumber = 1;
    let parseline = '';
    let columnEndOfLine;
    const codeMarker: codeSource = {
      codelineno: 0,
      block: multiLine,
      codesource: '',
      codepremarker: '',
      codemarker: '',
      codepostmarker: '',
    };
    const sourceFs = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: sourceFs,
    });
    rl.on('line', (line) => {
      parseline = line.toString();
      if (lineNumber == startLine) {
        if (multiLine) {
          columnEndOfLine = parseline.length;
        } else {
          columnEndOfLine = region.endColumn;
        }
        codeMarker.codelineno = lineNumber;
        codeMarker.codepremarker = parseline.substring(
          0,
          region.startColumn - 1,
        );
        codeMarker.codemarker = parseline.substring(
          region.startColumn - 1,
          columnEndOfLine,
        );
      }
      if (lineNumber == endLine) {
        if (multiLine) {
          codeMarker.codemarker =
            codeMarker.codemarker +
            '\n' +
            parseline.substring(0, region.endColumn);
        }
        codeMarker.codepostmarker = parseline.substring(
          region.endColumn,
          parseline.length,
        );
        codeString.push(codeMarker);
        rl.close();
      }
      if (lineNumber > startLine && lineNumber < endLine) {
        codeMarker.codemarker = codeMarker.codemarker + '\n' + parseline;
      }
      lineNumber++;
    });

    await events.once(rl, 'close');
    sourceFs.close();
    return codeString;
  } catch (error) {
    console.error(error);
  }
}

async function readCodeSnippet(codeInfomation) {
  const decodedpath = decodeURI(
    codeInfomation.physicalLocation.artifactLocation.uri,
  );
  const filePath = path.resolve(decodedpath);
  const codeRegion = codeInfomation.physicalLocation.region;
  const result = await processCodeLine(filePath, codeRegion);
  return result;
}

function getCurrentDirectory() {
  return process.cwd();
}

export async function processSourceCode(dataArray) {
  let test = [];
  let oldLocation = '';
  let newLocation = '';
  let findSeverityIndex;
  const codeSeverityCounter = [
    { severity: 'high', counter: 0 },
    { severity: 'medium', counter: 0 },
    { severity: 'low', counter: 0 },
  ];
  const rulesArray = dataArray[0].runs[0].tool.driver.rules;
  for (const issue of dataArray[0].runs[0].results) {
    issue.severitytext = codeSeverityMap[issue.level];
    findSeverityIndex = codeSeverityCounter.findIndex(
      (f) => f.severity === issue.severitytext,
    );
    codeSeverityCounter[findSeverityIndex].counter++;
    //add the code snippet here...
    issue.locations[0].physicalLocation.codeString = await readCodeSnippet(
      issue.locations[0],
    );
    //code stack
    for (const codeFlowLocations of issue.codeFlows[0].threadFlows[0]
      .locations) {
      codeFlowLocations.location.physicalLocation.codeString =
        await readCodeSnippet(codeFlowLocations.location);
      newLocation =
        codeFlowLocations.location.physicalLocation.artifactLocation.uri;
      if (newLocation === oldLocation) {
        codeFlowLocations.location.physicalLocation.isshowfilename = false;
      } else {
        codeFlowLocations.location.physicalLocation.isshowfilename = true;
      }
      oldLocation = newLocation;
    }
    //find ruleId -> tool.driver.rules
    test = rulesArray.find((e) => e.id === issue.ruleId);
    issue.ruleiddesc = test;
  }
  const currentFolderPath = getCurrentDirectory();
  const OrderedIssuesArray = dataArray.map((project) => {
    return {
      details: project.runs[0].properties,
      sourceFilePath: currentFolderPath,
      vulnsummarycounter: codeSeverityCounter,
      vulnerabilities: orderBy(
        project.runs[0].results,
        ['properties.priorityScore'],
        ['desc'],
      ),
    };
  });
  return OrderedIssuesArray;
}

export function processSuppression(suppression: any) {
  if (!suppression) {
    return null;
  }

  return {
    justification: suppression.justification || 'No justification provided',
    category: suppression.properties?.category || 'unknown',
    expiration: suppression.properties?.expiration,
    ignoredOn: suppression.properties?.ignoredOn || {
      date: 'unknown',
      reason: 'unknown',
    },
    ignoredBy: suppression.properties?.ignoredBy || {
      name: 'unknown',
      email: '?',
    },
  };
}

export function firstInitial(name: string | null | undefined): string {
  if (!name) {
    return '?';
  }
  return name.charAt(0).toUpperCase();
}

export function formatDate(date: string | null | undefined): string {
  if (!date) {
    return 'Unknown date';
  }
  return new Date(date).toISOString().slice(0, 19).replace('T', ' ') + ' GMT';
}
