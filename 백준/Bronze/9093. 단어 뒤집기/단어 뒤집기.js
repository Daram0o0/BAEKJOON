let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const num = +input[0]

for (let i = 1; i <= num; i++) {
  console.log(wordReverse(input[i]))
}

function wordReverse(str) {
  let arr = str.split(" ")
  let newStr = ""
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length; j >= 0; j--) {
      newStr += arr[i].charAt(j)
    }
    newStr += " "
  }

  return newStr
}