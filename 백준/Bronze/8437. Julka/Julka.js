const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [total, num] = fs.readFileSync(filePath).toString().trim().split("\n").map(str => BigInt(str))

let x = (total + num) / BigInt(2)
let y = total - x

console.log(x.toString())
console.log(y.toString())