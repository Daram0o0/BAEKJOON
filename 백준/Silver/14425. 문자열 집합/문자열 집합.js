const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [line, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let count = 0;
const [N, M] = line.split(" ").map(Number);
const input1 = new Set(input.slice(0, N));
const input2 = input.slice(-M);

input2.forEach((val) => {
  if (input1.has(val)) count++;
});

console.log(count);