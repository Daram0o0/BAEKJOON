const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const Rev = (num) => {
  return +num.toString().split("").reverse().join("");
};

console.log(Rev(Rev(a) + Rev(b)));