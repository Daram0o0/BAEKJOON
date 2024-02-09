let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();

let num = input.split(" ").map(Number).sort((a, b) => a - b)
console.log(num[1])