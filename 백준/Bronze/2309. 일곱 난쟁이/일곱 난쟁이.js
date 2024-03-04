let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

let arr = input.sort((a, b) => a - b)
let ex = []
const hap = arr.reduce((p, c) => p + c, 0)

for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (hap - (arr[i] + arr[j]) === 100) {
      ex = [arr[i], arr[j]]
    }
  }
}

arr.forEach((val) => {
  if (ex.includes(val)) return
  else console.log(val)
})