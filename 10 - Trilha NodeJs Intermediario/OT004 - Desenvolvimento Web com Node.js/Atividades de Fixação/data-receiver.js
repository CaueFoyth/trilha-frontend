const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();
const outputFile = path.join(__dirname, 'dados.txt');

emitter.on('dataReceived', (data) => {
  fs.appendFile(outputFile, data + '\n', (err) => {
    if (err) console.error('Erro ao salvar no arquivo:', err);
  });
});

emitter.on('dataReceived', (data) => {
  console.log('Dados recebidos:', data);
});

emitter.emit('dataReceived', 'Linha de exemplo 1');
emitter.emit('dataReceived', 'Outra linha de dados');
