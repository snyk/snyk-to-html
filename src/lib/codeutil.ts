import { RSA_X931_PADDING } from "constants";

const path = require('path');
const events = require('events');
const fs = require('fs');
const readline = require('readline');

export const codeSeverityMap = {
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
    const multiLine =
      region.startLine == endLine ? false : true;
    const codeString: Array<codeSource> = [];
    let lineNumber = 1;
    let parseline = '';
    let columnEndOfLine;
    const codeMarker: codeSource = {codelineno:0, block: multiLine, codesource: "", codepremarker:"", codemarker:"", codepostmarker:""};
    const sourceFs = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: sourceFs
    });
    rl.on('line', (line) => {
      parseline = line.toString('ascii');
      if (lineNumber == startLine){
        if (multiLine) {
          columnEndOfLine = parseline.length;
        }
        else {
          columnEndOfLine = region.endColumn;
        }
        codeMarker.codelineno = lineNumber;
        codeMarker.codepremarker = parseline.substring(0, region.startColumn - 1);
        codeMarker.codemarker = parseline.substring(
          region.startColumn - 1,
          columnEndOfLine,
        );
      }
      if (lineNumber == endLine) {
        if (multiLine){
          codeMarker.codemarker = codeMarker.codemarker + "\n" + parseline.substring(
            0,
            region.endColumn,
          );
        }
        codeMarker.codepostmarker =  parseline.substring(
          region.endColumn,
          parseline.length,
        );
        codeString.push(codeMarker);
        rl.close();
      }
      if ( lineNumber>startLine && lineNumber < endLine){
        codeMarker.codemarker = codeMarker.codemarker + "\n" + parseline;
      }
      lineNumber++;
    });

    await events.once(rl, 'close');
    sourceFs.close();
    return codeString;
  } catch (err) {
    console.error(err);
  }
};

export async function readCodeSnippet(codeInfomation){
  const filePath = path.resolve(
    codeInfomation.physicalLocation.artifactLocation.uri,
  );
  const codeRegion = codeInfomation.physicalLocation.region;
  const result = await processCodeLine(filePath, codeRegion);
  return result;
}

export function getCurrentDirectory() {
  //return path.dirname(__dirname);
  return process.cwd();
}
