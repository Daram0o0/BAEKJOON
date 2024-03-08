let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

let [s, k] = input
let multi = 1

while (k > 0) {
  let newNum = Math.ceil(s / k)
  s -= newNum
  multi *= newNum
  k--
}

console.log(multi)