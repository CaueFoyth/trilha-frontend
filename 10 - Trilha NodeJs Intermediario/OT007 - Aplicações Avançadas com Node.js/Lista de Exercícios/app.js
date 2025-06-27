import express from 'express';
import logger from './logger.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  logger.info('GET / requisitado');
  res.send('Olá Mundo');
});

app.get('/erro', (req, res) => {
  const err = new Error('Erro simulado');
  logger.error('Rota /erro falhou', { message: err.message, stack: err.stack });
  res.status(500).send('Erro!');
});

app.listen(3000, () => logger.info('Servidor ouvindo na porta 3000'));