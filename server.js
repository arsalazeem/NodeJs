const http=require('http');

const server=http.createServer((req,res)=>{
res.setHeader('Content-Type','text/plain');
res.write('Welcome to my Backend API LOL');
res.end();
})


server.listen('3000',()=>{
    console.log(`Listening on port number 3000`);
})