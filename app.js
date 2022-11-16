/*
* using circle class by importing circle class
* basic creation of server
*/
// const http = require('http');
// const Circle = require('./circle');
// const PORT = 3000;
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//         JSON.stringify(
//             { data: "Hello From Server" }
//     ));
// })

// server.listen(PORT);

/*
* using circle class by importing circle class
*/
// const circle = new Circle();
// console.log(circle.area(5));
// console.log(circle.perimeter(10));

/*
* creation of server then checking the route value and displaying related data according to 
* routes
*/
const PORT = 3000;
const http = require('http');
const server1 = http.createServer((req,res) => {
    let url = req.url;
    if(url == '/'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(
            {data:"This is home page"}
        ))
        res.end();
    }
    else if(url == '/login'){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify(
            {data:"This is login page"}
        ))
        res.end();
    }
    else if(url == '/signup'){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify(
            {data:"This is signup page"}
        ))
        res.end();
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write('<h1>PAGE NOT FOUND</h1>');
        res.end();
    }
})

server1.listen(PORT);