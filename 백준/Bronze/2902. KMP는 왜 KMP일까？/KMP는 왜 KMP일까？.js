const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("-")
let answer = ''
input.forEach(val => answer += val[0])
console.log(answer)