const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const num = +input;

const fibonacci = (num) => {
  let memo = [0, 1];

  for (let i = 2; i <= num; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[num];
};

console.log(fibonacci(num));