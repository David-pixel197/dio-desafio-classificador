// npm install prompt-sync
// usar nos arquivos js -> const { gets, print } = require('../src/utils/utils');

const prompt = require('prompt-sync')();

function gets() {
  const userInput = prompt('Digite: ');
  return userInput;
}

function print(message) {
  console.log(message);
}

module.exports = {gets, print};