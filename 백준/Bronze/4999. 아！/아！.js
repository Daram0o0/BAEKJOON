const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(A.length < B.length ? "no" : "go");