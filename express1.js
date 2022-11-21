const express = require('express')
const app = express()
const PORT = 4444;
app.get('/', (req, res) => {
    res.send('Hello from Express Server');
})
app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1>');
})
app.post('/', (req, res) => {
    res.json({ data: "Hello" })
})
app.get('/*',(req,res) => {
    res.json({data:'Not Available😒'});
})
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})