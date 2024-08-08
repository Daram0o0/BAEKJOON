const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, A, B] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +N;
let answer = 0;

for (let i = 0; i < num; i++) {
  if (A[i] !== B[i]) answer++;
}

console.log(answer);
