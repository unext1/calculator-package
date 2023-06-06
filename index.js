const logger = require("@laurysva/logger-package");

function add(a, b) {
  const res = a + b;
  logger(`Result is: ${res}`);
}

function subtract(a, b) {
  const res = a - b;
  logger(`Result is: ${res}`);
}

function multiply(a, b) {
  const res = a * b;
  logger(`Result is: ${res}`);
}

function divide(a, b) {
  const res = a / b;
  logger(`Result is: ${res}`);
}

function modulo(a, b) {
  const res = a % b;
  logger(`Result is: ${res}`);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
};
