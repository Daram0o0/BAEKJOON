let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const num = +input[0]
let chang = 100
let sang = 100

for (let i = 1; i <= num; i++) {
  calculateScore(input[i])
}

console.log(chang + "\n" + sang)

function calculateScore(arr) {
  const [a, b] = arr.split(" ").map(Number)
  if (a > b) sang -= a
  else if (a < b) chang -= b
}