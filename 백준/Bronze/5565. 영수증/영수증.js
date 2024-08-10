const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [totalMoney, ...lines] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

lines.forEach((val) => {
  if (totalMoney >= val) totalMoney -= val;
});

console.log(totalMoney);
