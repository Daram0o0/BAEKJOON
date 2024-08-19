const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let num = fs.readFileSync(filePath).toString().trim();

console.log(num == 1 ? "SciComLove" : num == 2 ? "SciComLove\nSciComLove" : "");