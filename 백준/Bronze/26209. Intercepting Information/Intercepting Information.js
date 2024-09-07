const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let scores = fs.readFileSync(filePath).toString().trim();

console.log(scores.includes("9") ? "F" : "S");
