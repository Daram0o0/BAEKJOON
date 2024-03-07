let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let num = +input[0]

function checkPalindrome(str) {
  const len = str.length
  const middle = Math.floor(len / 2)

  const newStr = str.toLowerCase()
  for (let i = 0; i < middle; i++) {
    if (newStr.charAt(i) !== newStr.charAt(len - 1 - i)) {
      return "No"
    }
  }
  return "Yes"
}

let i = 1

while (i <= num) {
  console.log(checkPalindrome(input[i]))
  i++
}