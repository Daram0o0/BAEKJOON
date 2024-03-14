let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n").map(Number);

const arr = input.filter(val => val % 2)

if (arr.length === 0) {
  console.log(-1)
}
else {
  console.log([...arr].reduce((p, c) => p + c, 0))
  console.log(Math.min(...arr))
}
