const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()

let num = +input
let k = 0
let counter = 1

while (num > 0) {
  num -= counter++

  if (num < counter) counter = 1

  k++
}

console.log(k)