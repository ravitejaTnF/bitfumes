const express = require('express');
const router = express.Router();
const bookRouter = require('./book-sub');
const path = require('path');;
const authRouter = require('../routes/auth');
router.get('/',(req,res) => {
    //res.send('Hello world from express server..!');
    res.sendFile(path.join(__dirname,'/../pages/home.html'));
    //console.log(__dirname);
})

router.use(bookRouter);
router.use('/auth',authRouter);

router.get('/*',(req,res) => {
    //res.send('Page no found..😒');
    res.status(404).sendFile(path.join(__dirname,'/../pages/page-not-found.html'));
})

module.exports = router;