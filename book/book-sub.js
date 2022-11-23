const express = require('express');
const bookrouter = express.Router();
const connect = require('./../database/db');

bookrouter.route('/book')
    .get(async(req, res) => {
        const db = await connect();
        const books = await db.collection('book-db').find().toArray();
        res.json(books);
    })
    .post(async(req, res) => {
        // console.log(req.body);
        // res.json(req.body);
        const db = await connect();
        const data = req.body;
        await db.collection('book-db').insertOne(data);
        res.json({ data: 'Book is stored' });
    })

bookrouter.get('/book/:id', (req, res) => {
    let id = req.params.id;
    res.json({ data: `Book ${id} is fetched!` });
})
bookrouter.post('/book/:id', async(req, res) => {
    let id = req.params.id;
    res.json({ data: `Book ${id} is stored` });
})
bookrouter.patch('/book/:id', (req, res) => {
    let id = req.params.id;
    res.json({ data: `Book ${id} is updated` });
})
bookrouter.delete('/book/:id', (req, res) => {
    let id = req.params.id;
    res.json({ data: `Book ${id} is deleted` });
})
module.exports = bookrouter;