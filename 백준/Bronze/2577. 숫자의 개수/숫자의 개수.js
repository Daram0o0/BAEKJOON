let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let num = 1;

for (let i = 0; i < input.length; i++) {
  num *= input[i];
}

let arr = Array(10).fill(0)
num.toString().split("").forEach((val, idx) => {
  arr[+val]++;
})

arr.forEach(val => console.log(val))