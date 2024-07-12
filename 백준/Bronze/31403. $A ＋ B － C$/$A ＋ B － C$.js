const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B, C] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +A + +B - +C;
console.log(num);
console.log(A + B - C);