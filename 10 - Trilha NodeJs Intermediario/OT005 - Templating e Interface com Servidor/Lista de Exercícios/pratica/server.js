const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = 3000;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'meubanco'
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('error', { message: 'Erro interno' });
});
app.use(async (req, res, next) => {
    const [cats] = await db.query('SELECT id, name FROM categories');
    res.locals.menu = cats;
    next();
});



app.get('/', (req, res) => {
    res.render('home', { title: 'Página Inicial' });
});

app.get('/users', async (req, res, next) => {
    try {
        const [users] = await db.query('SELECT id, nome, email FROM users');
        res.render('users', { title: 'Lista de Usuários', users });
    } catch (err) { next(err); }
});

app.get('/new', (req, res) => {
    res.render('new', { title: 'Cadastrar Usuário', errors: null, old: {} });
});

app.post('/new',
    // Validações
    body('nome').trim().notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    async (req, res) => {
        const errors = validationResult(req);
        const old = { nome: req.body.nome, email: req.body.email };

        if (!errors.isEmpty()) {
            return res.render('new', { title: 'Cadastrar Usuário', errors: errors.array(), old });
        }

        await db.execute(
            'INSERT INTO users (nome, email) VALUES (?, ?)',
            [req.body.nome, req.body.email]
        );
        res.redirect('/users');
    }
);

app.listen(PORT, () => console.log(`> http://localhost:${PORT}`));
