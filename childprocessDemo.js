'use strict';

const spawn = require('child_process').spawn;

// const child = spawn('pid');
// const child = spawn('wc', ['childprocessDemo.js']);
const child = spawn('wc');
process.stdin.pipe(child.stdin);

child.on('exit', function (code, signal) {
  console.log('child process exited with ' + `code ${code} and signal ${signal}`);
});

child.stdout.on('data', (data) => {
  console.log(`child stdout \n ${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`child stderr \n ${data}`);
});

