let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();

const num = +input
let start = 2
let sum = 0
for (let i = 0; i < num; i++) {
  sum = start + (start - 1)
  start = sum
}

console.log(sum ** 2)