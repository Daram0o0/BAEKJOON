let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function changeChar(input) {
  let arr = []
  for (const char of input) {

    if (char === "(") {
      arr.push(char)
    }
    else if (char === ")") {
      if (arr[arr.length - 1] === "(") arr.pop()
      else arr.push(char)
    }


  }
  return arr.length
}

console.log(changeChar(input))