const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let num = fs.readFileSync(filePath).toString().trim();

console.log(num[0] === num[1] ? 1 : 0);
