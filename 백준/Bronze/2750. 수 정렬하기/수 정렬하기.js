let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let num = input[0];
let numbers = [];
for (let i = 1; i <= num; i++) {
  numbers.push(input[i]);
}

numbers.sort((a, b) => a - b).forEach(val => console.log(val))