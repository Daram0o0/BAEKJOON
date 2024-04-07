let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim()

const num = +input

let sum = 0
let i = 1
while (num >= i) {
  if (num % i == 0) sum += i
  i++

}
console.log(sum * 5 - 24)