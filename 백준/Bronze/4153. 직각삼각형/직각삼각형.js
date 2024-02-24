let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i][0] === "0") break
  let arr = input[i].split(" ").sort((a, b) => a - b)
  console.log((arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2) ? "right" : "wrong")
}