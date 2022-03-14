const nReadlines = require('n-readlines');
const path = require('path');

export const codeSeverityMap = { error: 'high', warning: 'medium', info: 'low', note: 'low'};
type codeSource = {
    codelineno: number
    codesource: string
    codepremarker: string
    codemarker: string
    codepostmarker: string
};

function readCodeLines(filePath, region){
    try{
        const endLine = region.endLine;
        const startLine = (region.startLine == endLine) ? endLine-4: region.startLine ;
        const codeString: Array<codeSource> = [];
        const readSourceFile = new nReadlines(filePath);
        let startRecording=false;
        let line;
        let lineNumber = 1;
        let parseline = ""; 
        let premarkercode = "";
        let markercode = "" ;
        let postmarkercode = "";
        while (line = readSourceFile.next()) {
            if ( lineNumber == startLine ) startRecording = true;
            else if ( lineNumber == endLine ) {
                parseline = line.toString('ascii');
                premarkercode = parseline.substring(0, region.startColumn-1);
                markercode = parseline.substring(region.startColumn-1, region.endColumn);
                postmarkercode = parseline.substring(region.endColumn, parseline.length);
            }
            else if ( lineNumber > endLine ) break;
            if (startRecording){
                codeString.push({codelineno: lineNumber, codesource: `${line}`, codepremarker: premarkercode, codemarker: markercode, codepostmarker: postmarkercode});
            }
            lineNumber++;
        }
        return codeString;
    } catch (err){
        console.error("Error reading: " + filePath);
        //console.error(err);
    }
}

export function readCodeSnippet(codeInfomation){
    const filePath = path.resolve(codeInfomation.physicalLocation.artifactLocation.uri);
    const codeRegion = codeInfomation.physicalLocation.region;
    return  readCodeLines(filePath, codeRegion);
}

export function getCurrentDirectory(){
    //return path.dirname(__dirname);
    return process.cwd();
}