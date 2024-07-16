const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [count, line] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = new Set(line.split(" ").map(Number));

console.log([...arr].sort((a, b) => a - b).join(" "));