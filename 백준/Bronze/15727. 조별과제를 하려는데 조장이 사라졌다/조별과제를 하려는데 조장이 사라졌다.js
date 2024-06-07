const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()

const num = +input
if (num >= 5) {
  console.log(Math.ceil(num / 5))
} else if (num >= 4) {
  console.log(Math.ceil(num / 4))
} else if (num >= 3) {
  console.log(Math.ceil(num / 3))
} else if (num >= 2) {
  console.log(Math.ceil(num / 2))
} else if (num >= 1) {
  console.log(Math.ceil(num / 1))
} else {
  console.log(0)
}