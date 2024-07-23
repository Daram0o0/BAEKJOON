const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf-8").toString().trim();

console.log(parseInt(input) % 2 == 0 ? "Duck" : "Goose");