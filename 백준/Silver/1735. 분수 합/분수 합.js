let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b] = require("fs").readFileSync(filePath).toString().trim().split("\n")

let [a1, a2] = a.split(" ").map(Number)
let [b1, b2] = b.split(" ").map(Number)

let newA = b2 * a1 + a2 * b1
let newB = a2 * b2

let divide = gcd(newA, newB)

console.log(newA / divide, newB / divide)


function gcd(a, b) {
  while (b !== 0) {
    let temp = a % b
    a = b
    b = temp
  }
  return a
}