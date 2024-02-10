let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

input.forEach((val, idx) => {
  if (val < 40) input[idx] = 40
})

console.log(input.reduce((p, c) => p + c, 0) / input.length)