let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(input[0] * input[1] - 1)