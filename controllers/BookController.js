const connect = require('./../database/db');
const { ObjectId } = require('mongodb');
const Book = require('../models/Book');
exports.getAllBooks = async(req, res) => {
    // const db = await connect();
    // const books = await db.collection('book-db').find().toArray();
    const books = await Book.find();
    res.json(books);
};

exports.createBook = async(req, res) => {
    //const db = await connect();
    //const data = req.body;
    try{
        await Book.create(req.body);
        res.json({ data: 'Book is stored' });
    }
    catch(err){
        res.json(err.errors)
    }
    //await db.collection('book-db').insertOne(data);
};

exports.getSingleBook = async(req, res) => {
    const _id = ObjectId(req.params.id);
    const book = await Book.find({_id});
    // const db = await connect();
    // const data = await db.collection('book-db').find({_id}).toArray();
    res.json(book);
};

exports.updateBook = async(req, res) => {
    const _id = ObjectId(req.params.id);
    await Book.updateOne({_id },{$set:req.body});
    // const db = await connect();
    // await db.collection('book-db').updateOne({_id },{$set:req.body});
    res.json({ data: `Book is updated` });
};

exports.deleteBook = async(req, res) => {
    const _id = ObjectId(req.params.id);
    await Book.deleteOne({_id});
    // const db = await connect();
    // await db.collection('book-db').deleteOne({_id});
    res.status(204).json();
};