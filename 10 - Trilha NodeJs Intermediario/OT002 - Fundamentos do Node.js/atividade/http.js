const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo à página inicial!');
  } else if (req.url === '/sobre' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Esta é a página Sobre.');
  } else if (req.url === '/contato' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Entre em contato conosco!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada.');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});