import fs = require('fs');

export async function readFile(filePath: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) { reject(err); }
            resolve(data);
        });
    });
}

export function loadSource(source?: string): Promise<string> {
    return source ? readFile(source) : readInputFromStdin();
}

async function readInputFromStdin(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        let jsonString = '';
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
            jsonString += chunk;
        }
        });
        process.stdin.on('error', reject);
        process.stdin.on('end', () => resolve(jsonString));
    });
}
