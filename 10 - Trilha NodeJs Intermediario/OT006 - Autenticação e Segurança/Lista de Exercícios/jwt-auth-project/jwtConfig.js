import jwt from 'jsonwebtoken';
const SECRET = 'segredo_super_secreto';

export const generateToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '1h' });
export const verifyToken = (token) => jwt.verify(token, SECRET);
