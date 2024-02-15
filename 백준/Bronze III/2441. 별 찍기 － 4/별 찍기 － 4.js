let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();

for (let i = +input; i > 0; i--) {
  let blank = ""
  for (let j = 0; j < +input - i; j++) {
    blank += " "
  }
  let star = "*".repeat(i)

  console.log(blank + star)
}