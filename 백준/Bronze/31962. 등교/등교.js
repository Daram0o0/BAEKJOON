const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, x] = input[0].split(" ").map(Number);

let maxTime = -1;

for (let i = 1; i <= n; i++) {
  const [s, t] = input[i].split(" ").map(Number);
  const arriveTime = s + t;
  if (arriveTime <= x && s > maxTime) {
    maxTime = s;
  }
}

console.log(maxTime);