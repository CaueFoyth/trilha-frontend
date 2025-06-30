const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static('public'));

const users = {};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
io.on('connection', (socket) => {
    console.log('🟢 Novo usuário conectado');

    socket.on('set username', (name) => {
        users[socket.id] = name;
    });

    socket.on('chat message', (msg) => {
        const name = users[socket.id] || 'Anônimo';
        io.emit('chat message', { name, message: msg });
    });

    socket.on('disconnect', () => {
        console.log('🔴 Usuário desconectado');
        delete users[socket.id];
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});