let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("")

const arr = new Array(26).fill(0)

input.forEach(val => {
  arr[val.charCodeAt() - 97]++
})
console.log(arr.join(" "))