import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', socket => {
  socket.on('join', room => socket.join(room));
  socket.on('chat message', ({ room, msg }) => {
    io.to(room).emit('chat message', { user: socket.id, msg });
  });
});

server.listen(4000, () => console.log('Chat na porta 4000'));