let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");


let num = +input[0]

console.log(input[1].split(" ").filter(e => e === input[2]).length)