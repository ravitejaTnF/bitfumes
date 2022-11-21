const express = require('express');
const app = express();
const PORT = 4444;

/*
* Chaining routes in Express L6-L14
*/
app.route('/book')
    .get((req, res) => {
        res.json({ data: 'Book is fetched' });
    })
    .post((req, res) => {
        res.json({ data: 'Book is stored' });
    })

app.get('/book', (req, res) => {
    res.json({ data: "All books" });
})

app.post('/book', (req, res) => {
    res.send('Book is stored..!');
})

app.get('/book/:id', (req, res) => {
    let id = req.params.id;
    res.json({ data: `Book ${id}` });
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

