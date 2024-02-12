let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const score = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0
}

let time = 0
let sum = 0

for (let i = 0; i < 20; i++) {
  let arr = input[i].split(" ")
  if (arr[2] === "P") continue
  else {
    time += +arr[1]
    sum += +arr[1] * score[arr[2]]
  }
}
console.log(sum / time)