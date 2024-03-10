let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(calculate(A, B))

function calculate(num1, num2) {
  return ((num1 + num2) * (num1 - num2))
}
