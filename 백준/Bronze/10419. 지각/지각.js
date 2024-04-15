let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [num, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n")

arr = arr.map(Number)

arr.forEach(val => {
  console.log(calculate(+val))
})

function calculate(number) {
  let d = number
  let t = 0
  let s = 0
  let max = 0
  while (d >= t + s) {
    t++
    s = Math.pow(t, 2)
  }
  return t - 1
}