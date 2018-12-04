/* eslint-disable no-console */

const chalk = require('chalk');

/**
 * Logs a simple message to the console
 * @param {string} message Message content
 */
function log(message) {
  if (process.env.NODE_ENV !== 'test') {
    console.log(chalk.green(message));
  }
}

/**
 * Logs an indented message to the console
 * @param {string} message Message content
 */
function logIndent(message) {
  log(`  ${message}`);
}

/**
 * Logs a new line, then a simple message to the console
 * @param {string} message Message content
 */
function logNewLine(message) {
  if (process.env.NODE_ENV !== 'test') {
    console.log('');
    log(message);
  }
}

/**
 * Logs a secondary styled message to the console
 * @param {string} message Message content
 */
function logSecondary(message) {
  if (process.env.NODE_ENV !== 'test') {
    console.log(message);
  }
}

module.exports = {
  log,
  logIndent,
  logNewLine,
  logSecondary
};
