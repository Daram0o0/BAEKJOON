const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input.shift();

for (let i = 0; i < num; i++) {
  const str = input.shift();
  console.log(str.length >= 6 && str.length <= 9 ? "yes" : "no");
}