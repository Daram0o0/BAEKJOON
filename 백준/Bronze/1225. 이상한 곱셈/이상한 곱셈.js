let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b] = require("fs").readFileSync(filePath).toString().trim().split(" ")

let sum = 0
a.split('').forEach(val1 => {
  b.split('').forEach(val2 => {
    sum += (+val1 * +val2)
  })
})

console.log(sum)