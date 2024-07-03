const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [first, last] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = new Array(last + 1).fill(0);

for (let i = 2; i <= last; i++) {
  if (arr[i] === 0) {
    for (let j = i * i; j <= last; j++) {
      if (j % i === 0 && arr[j] === 0) arr[j] = 1;
    }
  }
}

const newArr = [];

arr.forEach((val, idx) => {
  if (val === 0) newArr.push(idx);
});

newArr.forEach((val) => {
  if (val >= first && val > 1) console.log(val);
});