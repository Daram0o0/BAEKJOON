let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

let arr = []

for (let i = input[0]; i <= input[1]; i++) {
  let flag = false
  if (i === 2) {
    arr.push(i)
  }
  else if (i !== 1) {
    for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        flag = true
        break
      }
    }
    if (!flag) arr.push(i)
  }
}

if (arr.length > 0) {
  console.log(arr.reduce((p, c) => p + c))
  console.log(arr[0])
}
else {
  console.log(-1)
}