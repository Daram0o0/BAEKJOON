const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let num = fs.readFileSync(filePath).toString().trim();

if (num.includes("7")) {
  if (+num % 7 === 0) {
    console.log(3);
  } else {
    console.log(2);
  }
} else {
  if (+num % 7 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}