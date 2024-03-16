let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [T, ...C] = require("fs").readFileSync(filePath).toString().split("\n");

const money = [25, 10, 5, 1]

C.forEach(val => {
  let total = +val
  let arr = []
  while (total > 0) {
    money.forEach(val => {
      if (total / val > 0) {
        arr.push(Math.floor(total / val))
        total -= val * arr[arr.length - 1]
      } else {
        arr.push(0)
      }
    })
  }
  console.log(arr.join(" "))
})