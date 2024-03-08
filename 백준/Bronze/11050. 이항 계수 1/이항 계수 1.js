let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

let [n, k] = input

console.log(makeMultiNum(n) / (makeMultiNum(k) * makeMultiNum(n - k)))

function makeMultiNum(num) {
  let multiNum = 1

  while (num > 0) {
    multiNum *= num
    num--
  }
  return multiNum
}