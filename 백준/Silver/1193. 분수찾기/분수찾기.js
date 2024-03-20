let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();

const num = +input
let sum = 0
let endNum = 0
let seq = false

while (num > sum) {
  endNum++
  sum += endNum
  seq = !seq
}

let hap = endNum + 1 //top과 bottom을 더한 값

let bottom = 0
let top = 0

if (seq === true) {
  top = sum - num + 1
  bottom = hap - top
}
else {
  bottom = sum - num + 1
  top = hap - bottom
}

console.log(top + "/" + bottom)