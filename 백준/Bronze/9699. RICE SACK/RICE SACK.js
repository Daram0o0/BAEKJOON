const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +N;

for (let i = 1; i <= num; i++) {
  const max = Math.max(...input[i - 1].split(" ").map(Number));
  console.log(`Case #${i}: ${max}`);
}