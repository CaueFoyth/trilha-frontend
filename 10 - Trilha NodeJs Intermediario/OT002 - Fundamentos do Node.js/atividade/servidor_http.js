const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Bem-vindo ao Node.js!');
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});