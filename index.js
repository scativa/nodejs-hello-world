const http = require('http');
port = 8000

// This server will respond to all requests (regardless of path) with "hello world"
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("nodejs-hello-world: hello world at port " + port + "\n");

  // Put a message in the logs as well unless that's been disabled:
  if (process.env.NO_DEBUG) { return; }
  console.log(`Requested ${request.url}`);
});

server.listen(port);
console.log('nodejs-hello-world: Server is now listening at ' + port);
