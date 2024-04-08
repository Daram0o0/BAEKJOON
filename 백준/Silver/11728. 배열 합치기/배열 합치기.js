let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")

let arr = []
arr.push(...input[1].split(" ").map(Number))
arr.push(...input[2].split(" ").map(Number))

console.log(arr.sort((a, b) => a - b).join(" "))