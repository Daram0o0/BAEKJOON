const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");
const arr = new Array(26).fill(0);

input.forEach((val) => {
  if (val >= "a" && val <= "z") {
    arr[val.charCodeAt() - 97]++;
  }
});

const max = Math.max(...arr);
const answer = arr.reduce((prev, curr, curIdx) => {
  if (max === curr) {
    prev += String.fromCharCode(curIdx + 97);
  }
  return prev;
}, "");

console.log(answer);