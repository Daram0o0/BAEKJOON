const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()

if (input.includes('M') && input.includes('O') && input.includes('B') && input.includes('I') && input.includes('S')) console.log("YES")
else console.log("NO")