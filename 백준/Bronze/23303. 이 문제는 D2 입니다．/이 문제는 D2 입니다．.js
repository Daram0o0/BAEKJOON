const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()

if (input.includes("d2") || input.includes("D2")) console.log("D2")
else console.log("unrated")