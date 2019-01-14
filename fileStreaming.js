'use strict';

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./multiplePipingChildProcessDemo.js');
  src.pipe(res);
});

server.listen(8000);