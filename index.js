var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var ipaddress = "54.174.51.64" || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var port = process.env.PORT || 1337;
server.listen(port, ipaddress);

console.log("Server running 2at http://localhost:%d", port);
