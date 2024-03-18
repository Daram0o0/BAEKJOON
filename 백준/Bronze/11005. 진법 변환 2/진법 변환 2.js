let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, change] = require("fs").readFileSync(filePath).toString().split(" ");

console.log((+num).toString(+change).toUpperCase())