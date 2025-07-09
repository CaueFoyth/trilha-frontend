const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/usuarioController');
const auth = require('../middleware/auth');

router.post('/', ctrl.criar);
router.get('/', ctrl.listar);
router.put('/:id', ctrl.atualizar);
router.post('/login', ctrl.login);
router.get('/protegida', auth, ctrl.protegida);

module.exports = router;
