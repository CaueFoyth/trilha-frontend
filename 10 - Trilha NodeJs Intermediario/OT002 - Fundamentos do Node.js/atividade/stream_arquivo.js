const fs = require('fs');
const readline = require('readline');

async function processLargeFile(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    console.log(`Linha: ${line}`);
  }
}

processLargeFile('texto.txt');