const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

let max = -1;
let answer = "";

inputs.forEach((val) => {
  const [str, num] = val.split(" ");
  if (+num > max) {
    max = +num;
    answer = str;
  }
});

console.log(answer);