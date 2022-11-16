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
        fs.writeFile('temp/file1.html','this is a new file',(err) => {
            if(err){
                throw err;
            }
            res.write('File has been created successfully, check in the destination folder');
            res.end();
        })
    }
})

server.listen(4000);