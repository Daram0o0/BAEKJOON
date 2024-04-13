let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")

const arr = input[1].split(" ").map(Number).sort((a, b) => a - b)
console.log(arr[arr.length - 1])