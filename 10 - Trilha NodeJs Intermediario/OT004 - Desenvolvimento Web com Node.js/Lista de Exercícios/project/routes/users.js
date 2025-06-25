const express = require('express');
const router  = express.Router();
const db      = require('../db');


router.get('/', async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) { next(err); }
});


router.get('/search', async (req, res, next) => {
  try {
    const name = `%${req.query.name}%`;
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE name LIKE ?', [name]
    );
    res.json(rows);
  } catch (err) { next(err); }
});


router.post('/', async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const [result] = await db.execute(
      'INSERT INTO users (name,email) VALUES (?,?)',
      [name, email]
    );
    res.status(201).json({ id: result.insertId, name, email });
  } catch (err) { next(err); }
});


router.put('/:id', async (req, res, next) => {
  try {
    const { name } = req.body;
    const { id }   = req.params;
    const [result] = await db.execute(
      'UPDATE users SET name = ? WHERE id = ?',
      [name, id]
    );
    if (result.affectedRows === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) { next(err); }
});


router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await db.execute(
      'DELETE FROM users WHERE id = ?',
      [id]
    );
    if (result.affectedRows === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) { next(err); }
});

module.exports = router;
