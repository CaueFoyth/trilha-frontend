const EventEmitter = require('events');

class ChatRoom extends EventEmitter {
    join(user){
        this.emit('userJoined', user);
    }

    send(user, message){
        this.emit('message', {user, message});
    }
}


const chatRoom = new ChatRoom();

chatRoom.on('userJoined', (user) => {
    console.log(`${user} entrou na sala de chat.`);
});

chatRoom.on('message', ({user, message}) => {
    console.log(`${user}: ${message}`);
});

chatRoom.join('joao');
chatRoom.send('joao', 'Oi, pessoal!');

chatRoom.join('maria');
chatRoom.send('maria', 'Oi!');