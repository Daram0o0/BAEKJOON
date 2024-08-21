const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const width = (a * b) / 2;
console.log(width.toFixed(1));