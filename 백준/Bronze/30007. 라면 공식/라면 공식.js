const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input.shift();

for (let i = 0; i < num; i++) {
  const [a, b, x] = input.shift().split(" ").map(Number);
  console.log(a * (x - 1) + b);
}