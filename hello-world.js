const http = require("http");
const port = 3000;
var fs = require("fs");

function onRequest(response, request) {
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (err, data) {
    if (err) {
      response.writeHead(404);
      response.write("Error : File Not Found1");
    } else {
      response.write(data);
    }
    response.end();
  });
}

const server = http.createServer(onRequest(response, request));

server.listen(port);
