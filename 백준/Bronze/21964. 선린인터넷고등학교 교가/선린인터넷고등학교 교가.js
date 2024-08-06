const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +N;

console.log(input.slice(num - 5));