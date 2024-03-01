let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const b = input[0]
const n = +input[1]
console.log(parseInt(b, n))