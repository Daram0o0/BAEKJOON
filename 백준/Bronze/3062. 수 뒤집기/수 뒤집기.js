let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const num = +input[0]

for (let i = 1; i <= num; i++) {
  console.log(reverseWord(+input[i]))
}

function reverseWord(num) {
  let a = num
  let b = +((num + "").split("").reverse().join(""))
  let sum = a + b
  if ((sum + "") === (sum + "").split("").reverse().join("")) return "YES"
  else return "NO"
}