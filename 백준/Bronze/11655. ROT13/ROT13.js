let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().split("")
let alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let answer = ''
input.forEach(val => {
  let num = (alphaLower.indexOf(val.toLowerCase()) + 13) % 26
  if (val.match(/[a-z]/g)) { answer += alphaLower[num] }
  else if (val.match(/[A-Z]/g)) { answer += alphaUpper[num] }
  else answer += val
})

console.log(answer)