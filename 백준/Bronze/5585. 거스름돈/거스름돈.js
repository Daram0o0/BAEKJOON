let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();

let change = 1000 - +input
const moneys = [500, 100, 50, 10, 5, 1]
let answer = 0
let num = 0

moneys.forEach(val => {
  answer = Math.floor(change / val)
  num += answer
  change -= val * answer
})

console.log(num)