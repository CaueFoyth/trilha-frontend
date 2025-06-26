import express from 'express';
import db from '../db.js';
import { generateToken } from '../jwtConfig.js';
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const user = db.prepare('SELECT * FROM usuarios WHERE email = ? AND senha = ?').get(email, senha);

  if (!user) return res.status(401).send('Credenciais inválidas');

  const token = generateToken({ id: user.id, role: user.role });
  res.json({ token });
});

export default router;
