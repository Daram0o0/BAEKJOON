const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < +N; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(A < B ? "NO BRAINS" : "MMM BRAINS");
}