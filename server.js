const http=require('http');

const server=http.createServer((req,res)=>{
console.log('a request has been made');
console.log(req.url);
console.log(req.method);
})


server.listen('3000',()=>{
    console.log(`Listening on port number 3000`);
})