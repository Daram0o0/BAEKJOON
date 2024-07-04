const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = new Array(n + 1).fill(0);
let count = 0;

for (let i = 2; i <= n; i++) {
  if (arr[i] === 0) {
    for (let j = i; j <= n; j += i) {
      if (j % i === 0 && arr[j] === 0) {
        arr[j] = 1;
        count++;
        if (count === k) console.log(j);
      }
    }
  }
}