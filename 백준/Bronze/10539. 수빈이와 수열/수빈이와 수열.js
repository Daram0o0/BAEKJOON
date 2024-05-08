const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
let arr = []
let prevNum = 0
for (let i = 0; i < T; i++) {

  let numArray = input[0].split(" ").map(Number)
  let newNum = numArray[i]
  arr.push(newNum * (i + 1) - prevNum)
  prevNum += arr[i]
}

console.log(arr.join(" "))