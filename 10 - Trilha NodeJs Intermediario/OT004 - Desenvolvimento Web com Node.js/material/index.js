const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'projeto_node'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

const app = express();

app.use((req, res, next) => {
    console.log(`Método: ${req.method}, URL ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor Express.js!');
})

app.get('users', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return
        }
        res.json(results);
    })
})

app.post('/users', (req, res) => {
    const { nome, email } = req.body;
    connection.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (err) => {
        if (err) {
            res.status(500).send(err);
            return
        }
        res.json({ message: 'Usuário cadastrado com sucesso!' });
    });
})

app.put('/users/:id', (req, res) => {
    const { nome, email } = req.body;
    connection.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, req.params.id], (err) => {
        if (err) {
            res.status(500).send(err);
            return
        }
        res.json({ message: 'Usuário atualizado com sucesso!' });
    });
})

app.delete('/users/:id', (req, res) => {
    connection.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err) => {
        if (err) {
            res.status(500).send(err);
            return
        }
        res.json({ message: 'Usuário excluido com sucesso!' });
    });
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express.js rodando na porta ${PORT}`);
})