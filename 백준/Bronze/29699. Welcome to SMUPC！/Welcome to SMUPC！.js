const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let num = fs.readFileSync(filePath).toString().trim();
const letter = "WelcomeToSMUPC";
const len = letter.length;

const index = num % len === 0 ? len - 1 : (num % len) - 1;

console.log(letter[index]);
