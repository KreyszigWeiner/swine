'use strict';

const spawn = require('child_process').spawn;

// spawn a find process, that finds all files in your directory
const find = spawn('find', ['.', '-type', 'f']);

// spawn a word count (wc) process, `-l` suggests that we want only lines
// for more info: `man wc`
const wc = spawn('wc', ['-l']);

// pipe the output of the find command to wc (word count) process
find.stdout.pipe(wc.stdin);

find.on('exit', function (code, signal) {
  console.log('find process exited with ' + `code ${code} and signal ${signal}`);
});

wc.on('exit', function (code, signal) {
  console.log('wc process exited with ' + `code ${code} and signal ${signal}`);
});

wc.stdout.on('data', (data) => {
  console.log(`Number of files \n ${data}`);
});

wc.stderr.on('data', (data) => {
  console.log(`child stderr \n ${data}`);
});

