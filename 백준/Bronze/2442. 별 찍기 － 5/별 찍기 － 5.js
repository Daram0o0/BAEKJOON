let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();

let num = +input

function star(num) {
  for (let i = 0; i < num; i++) {
    let str = ""
    for (let j = num - 1 - i; j > 0; j--) {
      str += " "
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*"
    }
    console.log(str)
  }
}

star(num)