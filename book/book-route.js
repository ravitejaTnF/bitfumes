const express = require('express');
const router = express.Router();
const bookRouter = require('./book-sub');

router.get('/',(req,res) => {
    res.send('Hello world from express server..!');
})

router.use(bookRouter);

router.get('/*',(req,res) => {
    res.send('Page no found..😒');
})

module.exports = router;