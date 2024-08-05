const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, U, L] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = "Bad";

if (N >= 1000) answer = "Good";
if (answer === "Good" && (U >= 8000 || L >= 260)) answer = "Very Good";

console.log(answer);
