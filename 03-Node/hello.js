const chalk = require('chalk');

const fs = require('fs')
const txt = fs.readFileSync('lorem.txt')

console.log(chalk.yellow(txt));