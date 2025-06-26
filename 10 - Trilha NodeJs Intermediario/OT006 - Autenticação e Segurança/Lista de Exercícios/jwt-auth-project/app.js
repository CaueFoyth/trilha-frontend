import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import protectedRoutes from './routes/protected.js';
import csrfRoutes from './routes/csrf.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'segredo',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  }
}));

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/csrf', csrfRoutes);

app.listen(4000, () => console.log('Servidor rodando na porta 4000'));
