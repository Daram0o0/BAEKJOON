let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [input, ...arr] = require("fs").readFileSync(filePath).toString().trim().split("\n")

let sum = +input.split(" ")[1]
let answer = 0

arr = arr.map(Number).sort((a, b) => b - a)

while (sum > 0) {
  arr.forEach(val => {
    if (parseInt(sum / val) > 0) {
      let num = parseInt(sum / val)
      answer += num
      sum -= val * num
    }
  })
}

console.log(answer)