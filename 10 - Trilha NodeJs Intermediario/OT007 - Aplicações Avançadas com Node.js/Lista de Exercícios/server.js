import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
const io = new Server(server);

io.on('connection', socket => {
  console.log('Cliente conectado:', socket.id);
  socket.on('mensagem', msg => {
    console.log('Recebido:', msg);
    socket.emit('resposta', `Got: ${msg}`);
  });
});

server.listen(3000, () => console.log('Socket.io na porta 3000'));
