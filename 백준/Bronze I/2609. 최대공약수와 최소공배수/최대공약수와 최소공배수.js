let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split(" ").map(Number);

for (let i = Math.min(...input); i > 0; i--) {
  if (input[0] % i === 0 && input[1] % i === 0) {
    console.log(i)
    console.log(input[0] * input[1] / i)
    break
  }
}