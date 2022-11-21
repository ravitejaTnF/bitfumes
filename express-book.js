const express = require('express');
const app = express();
const PORT = 4444;
app.get('/books',(req,res) => {
    res.json({data:"All books"});
})

app.get('/books/:id',(req,res) => {
    let id = req.params.id;
    res.json({data:`Book ${id}`});
})

app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

