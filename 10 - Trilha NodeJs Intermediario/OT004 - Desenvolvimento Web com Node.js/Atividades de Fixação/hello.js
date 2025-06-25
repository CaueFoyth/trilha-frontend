const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('hello', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('hello', 'Ana');
