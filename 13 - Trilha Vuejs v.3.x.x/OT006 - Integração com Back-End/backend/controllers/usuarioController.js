const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.criar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const hash = await bcrypt.hash(senha, 8);
    const usuario = await Usuario.create({ nome, email, senha: hash });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.listar = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

exports.atualizar = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  await Usuario.update({ nome, email }, { where: { id } });
  res.send("Atualizado com sucesso");
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) return res.status(404).send("Usuário não encontrado");

  const ok = await bcrypt.compare(senha, usuario.senha);
  if (!ok) return res.status(401).send("Senha inválida");

  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

exports.protegida = (req, res) => {
  res.send("Acesso autorizado à rota protegida");
};
