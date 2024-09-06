const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let scores = fs.readFileSync(filePath).toString().trim().split("\n");

function calculateScore(score) {
  const [T, F, S, P, C] = score.split(" ").map(Number);
  return T * 6 + F * 3 + S * 2 + P * 1 + C * 2;
}

let result = "";
for (let i = 0; i < scores.length; i++) {
  result += calculateScore(scores[i]) + " ";
}

console.log(result.trim());