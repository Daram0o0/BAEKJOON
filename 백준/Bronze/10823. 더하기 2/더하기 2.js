let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(",");

let sum = 0

for (let i = 0; i < input.length; i++) {
  sum += +(input[i].replaceAll('\n', ''))
}

console.log(sum)