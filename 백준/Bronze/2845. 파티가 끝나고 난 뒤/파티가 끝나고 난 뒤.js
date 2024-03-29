let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number)
let str = ""
input[1].split(" ").map(Number).forEach(val => {
  str += (val - a * b) + " "
})
console.log(str)