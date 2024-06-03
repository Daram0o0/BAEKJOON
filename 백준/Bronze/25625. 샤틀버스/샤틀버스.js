const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [x, y] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)
console.log(x <= y ? y - x : x + y)