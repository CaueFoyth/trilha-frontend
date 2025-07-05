const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [];

app.get('/usuarios', (req, res) => res.json(usuarios));

app.post('/usuarios', (req, res) => {
  usuarios.push(req.body);
  res.status(201).json(req.body);
});

app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter((_, index) => index !== id);
  res.status(204).send();
});


app.listen(3000, () => console.log('API rodando na porta 3000'));
