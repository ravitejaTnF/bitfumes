const connect = require('./../database/db');
const { ObjectId } = require('mongodb');

exports.getAllBooks = async(req, res) => {
    const db = await connect();
    const books = await db.collection('book-db').find().toArray();
    res.json(books);
};

exports.createBook = async(req, res) => {
    const db = await connect();
    const data = req.body;
    await db.collection('book-db').insertOne(data);
    res.json({ data: 'Book is stored' });
};

exports.getSingleBook = async(req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    const data = await db.collection('book-db').find({_id}).toArray();
    res.json(data);
};

exports.updateBook = async(req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    await db.collection('book-db').updateOne({_id },{$set:req.body});
    res.json({ data: `Book is updated` });
};

exports.deleteBook = async(req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    await db.collection('book-db').deleteOne({_id});
    res.status(204).json();
};