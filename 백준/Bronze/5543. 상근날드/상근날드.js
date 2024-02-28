let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

const burger = [input[0], input[1], input[2]].sort((a, b) => a - b)
const drink = [input[3], input[4]].sort((a, b) => a - b)
console.log(burger[0] + drink[0] - 50)