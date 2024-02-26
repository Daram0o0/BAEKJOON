let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let idx = input[0].split(" ")[1] - 1
let arr = input[1].split(" ").map(Number).sort((a, b) => b - a)

console.log(arr[idx])