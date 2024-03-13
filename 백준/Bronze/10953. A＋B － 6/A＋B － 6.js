let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...arr] = require("fs").readFileSync(filePath).toString().split("\n");

for (let i = 0; i < +num; i++) {
  const [a, b] = arr[i].split(",").map(Number)
  console.log(a + b)
}