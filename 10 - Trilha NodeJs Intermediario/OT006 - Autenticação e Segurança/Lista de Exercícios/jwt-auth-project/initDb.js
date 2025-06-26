import db from './db.js';

db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    email TEXT,
    senha TEXT,
    role TEXT
  );
`);

db.prepare('DELETE FROM usuarios').run();

const stmt = db.prepare('INSERT INTO usuarios (nome, email, senha, role) VALUES (?, ?, ?, ?)');
stmt.run('Admin', 'admin@site.com', '1234', 'admin');
stmt.run('Usuario', 'user@site.com', '1234', 'user');

console.log('Banco inicializado com usuários.');
