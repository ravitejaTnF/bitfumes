const express = require('express')
const app = express()
const PORT = 5000;
const bookRoute = require('./book-route');
const bodyParser =require('body-parser');
const connectDB = require('../database/db');
app.use(bodyParser.json());
app.use(bookRoute);

connectDB().then(() => {
    app.listen(PORT,() => {
        console.log(`server is running at http://localhost:${PORT}`);
    });
})