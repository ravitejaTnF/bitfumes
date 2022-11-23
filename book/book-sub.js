const express = require('express');
const { ObjectId } = require('mongodb');
const bookrouter = express.Router();
const BookController = require('./../controllers/BookController');
bookrouter.route('/book')
    .get(BookController.getAllBooks)
    .post(BookController.createBook)

bookrouter.get('/book/:id', BookController.getSingleBook)
bookrouter.patch('/book/:id', BookController.updateBook)
bookrouter.delete('/book/:id', BookController.deleteBook)
module.exports = bookrouter;