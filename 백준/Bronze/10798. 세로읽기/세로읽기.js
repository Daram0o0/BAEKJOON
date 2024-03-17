let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let height = input.length;
let width = Math.max(...input.map(arr => arr.length));

let str = ""
for (let i = 0; i < width; i++) {
  for (let j = 0; j < height; j++) {
    str += input[j][i] ? input[j][i] : ""
  }
}

console.log(str)