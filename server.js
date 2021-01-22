const http=require('http');

const server=http.createServer((req,res)=>{
console.log('a request has been made')
})


server.listen('3000',()=>{
    console.log(`Listening on port number 3000`);
})