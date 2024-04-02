let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const num = +input[0]
let arr = input[1].split("")

for (let i = 2; i <= num; i++) {
  input[i].split("").forEach((val, idx) => {
    if (arr[idx] !== val) arr[idx] = "?"
  })
}
console.log(arr.join(""))