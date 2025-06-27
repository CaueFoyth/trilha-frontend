const db = require('../database');
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(3).required()
});

exports.getAll = async (req, res) => {
    const { page = 1, limit = 10, name } = req.query;
    let query = 'SELECT * FROM records';
    let params = [];

    if (name) {
        query += ' WHERE name LIKE ?';
        params.push(`%${name}%`);
    }

    query += ' LIMIT ? OFFSET ?';
    params.push(parseInt(limit), (page - 1) * limit);

    const [rows] = await db.execute(query, params);
    res.json(rows);
};

exports.create = async (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { name } = req.body;
    await db.execute('INSERT INTO records (name) VALUES (?)', [name]);
    res.status(201).send('Created');
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    await db.execute('UPDATE records SET name = ? WHERE id = ?', [name, id]);
    res.send('Updated');
};

exports.remove = async (req, res) => {
    const { id } = req.params;
    await db.execute('DELETE FROM records WHERE id = ?', [id]);
    res.send('Deleted');
};
