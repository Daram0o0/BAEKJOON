const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input[0];
const arr = input[1].split("").map(Number);

let odd = 0;
let even = 0;

arr.forEach((val) => (val % 2 == 0 ? even++ : odd++));

console.log(odd > even ? 1 : odd === even ? -1 : 0);