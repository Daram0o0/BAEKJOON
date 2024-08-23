const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

switch (input) {
  case "SONGDO":
    console.log("HIGHSCHOOL");
    break;
  case "CODE":
    console.log("MASTER");
    break;
  case "2023":
    console.log("0611");
    break;
  case "ALGORITHM":
    console.log("CONTEST");
    break;
  default:
    break;
}
