const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()
// M, W, C, A, $
switch (input) {
  case "M":
    console.log("MatKor");
    break;
  case "W":
    console.log("WiCys");
    break;
  case "C":
    console.log("CyKor");
    break;
  case "A":
    console.log("AlKor");
    break;
  case "$":
    console.log("$clear");
    break;
  default:
    break;
}