let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let arr = []

input.forEach(val => {
  arr.push(val.split(" ").map(Number).reduce((a, b) => a + b, 0))
})

const max = Math.max(...arr)
console.log(arr.indexOf(max) + 1, max)