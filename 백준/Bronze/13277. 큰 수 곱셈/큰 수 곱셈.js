let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let a = BigInt(input[0])
let b = BigInt(input[1])
console.log((a * b) + "")