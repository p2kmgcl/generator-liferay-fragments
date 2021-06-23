#!/usr/bin/env node

const { command } = require('execa');
const fs = require('fs');
const path = require('path');

const yo = path.resolve(__dirname, '..', 'node_modules', '.bin', 'yo');
const [generatorName, ...args] = process.argv.slice(2);
let argString = '';

if (
  !generatorName ||
  !fs.existsSync(path.join(__dirname, generatorName)) ||
  !fs.statSync(path.join(__dirname, generatorName)).isDirectory()
) {
  argString = `${path.sep}app --help`;
} else {
  argString = `${path.sep}${generatorName} ${args.join(' ')}`;
}

command(`${yo} ${__dirname}${argString}`, {
  cwd: path.resolve('.'),
  stderr: process.stderr,
  stdin: process.stdin,
  stdout: process.stdout,
});
