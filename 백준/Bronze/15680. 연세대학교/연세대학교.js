const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()

let num = +input

console.log(num === 0 ? "YONSEI" : "Leading the Way to the Future")