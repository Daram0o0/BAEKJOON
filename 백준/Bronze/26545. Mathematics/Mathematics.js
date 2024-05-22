const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)

const n = input.shift()
let sum = 0
for (let i = 0; i < n; i++) {
  sum += input[i]
}
console.log(sum)