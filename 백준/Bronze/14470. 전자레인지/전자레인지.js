const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b, c, d, e] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number)
if (a >= 0) console.log((b - a) * e)
else console.log((0 - a) * c + d + b * e);