const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)

function maxValue(A, B, C) {
  const result1 = Math.floor((A * B) / C);
  const result2 = Math.floor((A / B) * C);
  const result3 = Math.floor(A * (B / C));

  const maxResult = Math.max(result1, result2, result3);

  return maxResult;
}

console.log(maxValue(a, b, c));