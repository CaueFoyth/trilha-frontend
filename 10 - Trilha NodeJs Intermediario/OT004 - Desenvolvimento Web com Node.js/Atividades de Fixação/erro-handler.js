const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (err) => {
  console.error('Ocorreu um erro:', err.message);
});

function doWork(shouldFail) {
  if (shouldFail) {
    emitter.emit('error', new Error('Falha intencional na operação'));
  } else {
    console.log('Operação concluída com sucesso');
  }
}

doWork(false);

doWork(true);
