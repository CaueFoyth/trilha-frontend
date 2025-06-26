import express from 'express';
import csrf from 'csurf';

const router = express.Router();
const csrfProtection = csrf({ cookie: true });

router.get('/token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

router.post('/enviar', csrfProtection, (req, res) => {
    res.send('CSRF verificado!');
});

export default router;
