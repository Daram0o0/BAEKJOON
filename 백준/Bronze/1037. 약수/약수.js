const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +num;
const arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(n === 1 ? arr[0] ** 2 : arr[0] * arr[arr.length - 1]);