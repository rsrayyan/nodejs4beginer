const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === ''){
        res.write("welcome to home page")
    }
    if(req.url === '/about'){
        res.end('here is yours short history')
    }
    res.write("welcome to my home page");
    res.write("rayyan is here");
    res.end()
});

server.listen(5000,()=>{
    console.log("server is started");
})

//1:44 minutes