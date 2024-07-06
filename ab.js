var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end('hello world\n');

}).listen(4000);
console.log('server running at http://localhost:5000/');