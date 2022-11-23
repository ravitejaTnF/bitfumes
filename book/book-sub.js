const express = require('express');
const { ObjectId } = require('mongodb');
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

bookrouter.get('/book/:id', async(req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    const data = await db.collection('book-db').find({_id}).toArray();
    res.json(data);
})
bookrouter.patch('/book/:id', async(req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    await db.collection('book-db').updateOne({_id },{$set:req.body});
    res.json({ data: `Book is updated` });
})
bookrouter.delete('/book/:id', async(req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    await db.collection('book-db').deleteOne({_id});
    res.status(204).json();
})
module.exports = bookrouter;