let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

input.sort((a, b) => a - b)
console.log(input.reduce((p, c) => p + c, 0) / 5)
console.log(input[2])