const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        fs.writeFile('temp/home.html',"<h1>Helllo Iam writing a new file using writeFile()</h1>",(err) => {
            if(err) throw err;
            res.write('file is created');
            res.end();
        });
    }else if(req.url == '/create-file'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        fs.appendFile('temp/file1.html','this is a new file',(err) => {
            if(err){
                throw err;
            }
            res.write('File has been created successfully, check in the destination folder');
            res.end();
        })
    }
    else if(req.url == '/forloop'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        for (let index = 0; index < 10000; index++) {
            fs.appendFile('temp/forloop.html','<h1>For loop data</h1>\n',(err) => {
                if(err){
                    throw err;
                }
            })
        }
        res.write('success');
        res.end();
    }else if(req.url == '/for'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        fs.readFile('temp/forloop.html',(err,data) => {
            if(err){
                throw err;
            }
            res.write(data);
            res.end();
        })
    }
})

server.listen(4000);