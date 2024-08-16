const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < a; i++) {
  let star = "";
  for (let j = 0; j < b; j++) {
    star += "*";
  }
  console.log(star);
}