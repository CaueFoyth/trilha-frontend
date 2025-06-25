require('dotenv').config();
const express = require('express');
const logger  = require('./middleware/logger');
const users   = require('./routes/users');

const app = express();

app.use(express.json());
app.use(logger);          
app.use('/users', users); 


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
);
