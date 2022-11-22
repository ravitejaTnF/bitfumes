const express = require('express');
const bookrouter = express.Router();

bookrouter.route('/book')
    .get((req, res) => {
        res.json({ data: 'Book is fetched' });
    })
    .post((req, res) => {
        res.json({ data: 'Book is stored' });
    })

bookrouter.get('/book/:id', (req, res) => {
    let id = req.params.id;
    res.json({ data: `Book ${id}` });
})
module.exports = bookrouter;