const http = require('http');
const app = require('./web/app');
const { port } = require('./config');

const server = http.createServer(app);

server.listen(port, () => {
  console.log('server started at ', port);
});