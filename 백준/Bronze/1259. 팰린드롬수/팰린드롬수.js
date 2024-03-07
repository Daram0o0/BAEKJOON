let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function checkPalindrome(str) {
  const len = str.length
  const middle = Math.floor(len / 2)

  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) {
      return "no"
    }
  }
  return "yes"
}

let i = 0
while (input[i] !== "0") {
  console.log(checkPalindrome(input[i]))
  i++
}