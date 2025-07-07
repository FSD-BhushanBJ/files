const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
    console.log(req);
    let userMachine = req.headers["user-agent"];
    // handling the querry parameters
    const parsedUrl = url.parse(req.url,true);
    const query = parsedUrl?.query;


    if(query?.name){
        res.writeHead(200, {"content-type": "text/plain"});
        res.end(`hello ${query.name}`);
        return;
    }
    else if (req.url ==  "/yash"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("hello Bj");
        return;
    }
    
    res.end(`Hello World from ${userMachine}`)
});

server.listen(3000, () => {
    console.log("server is running on port 3000");
});
