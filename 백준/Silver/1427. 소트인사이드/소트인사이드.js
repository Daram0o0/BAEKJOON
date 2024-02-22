let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("").map(Number);

input.sort((a, b) => b - a)
console.log(input.join(""))