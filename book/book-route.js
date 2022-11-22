const express = require('express');
const router = express.Router();


router.get('/',(req,res) => {
    res.send('Hello world from express server..!');
})

router.route('/book')
    .get((req, res) => {
        res.json({ data: 'Book is fetched' });
    })
    .post((req, res) => {
        res.json({ data: 'Book is stored' });
    })

router.get('/book/:id', (req, res) => {
    let id = req.params.id;
    res.json({ data: `Book ${id}` });
})

module.exports = router;