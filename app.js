// create server
const http = require('http');
const Circle = require('./circle');
const PORT = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify(
            { data: "Hello From Server" }
    ));
})

server.listen(PORT);

/*
* using circle class by importing circle class
*/
// const circle = new Circle();
// console.log(circle.area(5));
// console.log(circle.perimeter(10));
