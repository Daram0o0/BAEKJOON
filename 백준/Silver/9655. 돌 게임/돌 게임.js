let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();


let num = +input
let count = 0

while (num > 0) {
  if (num > 3) num -= 3
  else num -= 1
  count++
}

console.log(count % 2 ? "SK" : "CY")