let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let arr = input[i].split(" ").map(Number).sort((a, b) => a - b)
  for (let i = arr[0]; i > 0; i--) {
    if (arr[0] % i === 0 && arr[1] % i === 0) {
      console.log(arr[0] * arr[1] / i)
      break
    }
  }
}