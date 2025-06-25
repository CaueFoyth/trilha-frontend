const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('log', ({ level, message }) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
});

function info(msg) {
  emitter.emit('log', { level: 'info', message: msg });
}

function warn(msg) {
  emitter.emit('log', { level: 'warn', message: msg });
}

function error(msg) {
  emitter.emit('log', { level: 'error', message: msg });
}

info('Aplicação iniciada');
warn('Uso de memória elevado');
error('Falha ao conectar no banco de dados');
