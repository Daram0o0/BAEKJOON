const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let num = fs.readFileSync(filePath).toString().trim();

console.log((BigInt(num) % BigInt(20000303)).toString());
