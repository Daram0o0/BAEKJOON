const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)
console.log(a + b === c ? "correct!" : "wrong!")