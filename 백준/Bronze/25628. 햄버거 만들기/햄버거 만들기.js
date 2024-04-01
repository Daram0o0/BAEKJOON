let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const bread = Math.floor(+input[0] / 2)
const patty = Math.floor(+input[1])

console.log(bread > patty ? patty : bread)