const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()

switch (input) {
  case "NLCS":
    console.log("North London Collegiate School");
    break;
  case "BHA":
    console.log("Branksome Hall Asia");
    break;
  case "KIS":
    console.log("Korea International School");
    break;
  case "SJA":
    console.log("St. Johnsbury Academy");
    break;
  default:
    break;
}