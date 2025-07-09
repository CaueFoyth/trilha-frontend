const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send("Servidor rodando corretamente!"));
app.use('/usuarios', usuarioRoutes);

db.sync().then(() => {
    console.log("DB conectado");
    app.listen(3000, () => console.log("Servidor na porta 3000"));
}).catch(err => console.error("Erro ao conectar no DB:", err));
