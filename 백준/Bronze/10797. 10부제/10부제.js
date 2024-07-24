const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const carNum = +input[0];
const arr = input[1].split(" ").map(Number);

const answer = arr.reduce((p, c) => {
  if (c === carNum) p++;
  return p;
}, 0);

console.log(answer);