const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  join(user) {
    this.emit('userJoined', user);
  }

  sendMessage(user, text) {
    this.emit('message', { user, text });
  }
}

const room = new ChatRoom('Sala Geral');

room.on('userJoined', (user) => {
  console.log(`${user} entrou na sala "${room.name}"`);
});

room.on('message', ({ user, text }) => {
  console.log(`${user}: ${text}`);
});

room.join('João');

room.sendMessage('João', 'Olá, pessoal!');