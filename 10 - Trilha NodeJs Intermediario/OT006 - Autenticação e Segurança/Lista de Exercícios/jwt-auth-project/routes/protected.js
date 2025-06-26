import express from 'express';
import auth from '../middlewares/auth.js';
import authorizeRole from '../middlewares/role.js';

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.send(`Olá, usuário ${req.user.id}, role: ${req.user.role}`);
});

router.get('/admin', auth, authorizeRole('admin'), (req, res) => {
  res.send('Área administrativa');
});

export default router;
