let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let a = 0
let b = 0

for (let i = 0; i < input[0]; i++) {
  if (input[1][i] === "A") a++
  else b++
}

console.log(a > b ? "A" : a === b ? "Tie" : "B")