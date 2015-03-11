var http = require('http');

var index = "" +
"<!doctype html>/n" +
"    <html lang=\"en\">/n" +
"        <head>/n" +
"            <meta charset=\"utf-8\">/n" +
"            <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">/n" +
"            <title>Node.js Sandbox</title>/n" +
"            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"+
"        </head>/n" +
"        <body>/n" +
"           <p>Hello, World!</p>/n" +
"        </body>/n" +
"    </html>";

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(index);
    response.end();
});

server.listen(8000);