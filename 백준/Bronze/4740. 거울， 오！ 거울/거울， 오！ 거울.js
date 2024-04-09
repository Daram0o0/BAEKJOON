let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")

for (let i = 0; i < input.length - 1; i++) {
  console.log(input[i].split("").reverse().join(""))
}