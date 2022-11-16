const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    let url = req.url;
    if(url == '/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("pages/home.html",(err,data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }
    else if(url == '/login'){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("pages/login.html",(err,data) => {
            res.write(data);
            res.end();
        })
    }
    else if(url == '/signup'){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("pages/signup.html",(err,data) => {
            res.write(data);
            res.end();
        })
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        fs.readFile("pages/page-not-found.html",(err,data) => {
            res.write(data);
            res.end();
        })
    }
})
server.listen(3000);
