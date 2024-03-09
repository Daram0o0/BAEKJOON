let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();
console.log(changeChar(input))

function changeChar(input) {
  let newStr = ""
  for (const char of input) {
    if (char.charCodeAt() >= 97) {
      newStr += char.toUpperCase()
    }
    else {
      newStr += char.toLowerCase()
    }
  }
  return newStr
}