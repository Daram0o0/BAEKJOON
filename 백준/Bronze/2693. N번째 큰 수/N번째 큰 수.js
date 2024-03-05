let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const num = +input[0]

for (let i = 0; i < num; i++) {
  let arr = input[i + 1].split(" ")
  arr = arr.map(Number).sort((a, b) => b - a)
  console.log(arr[2])
}