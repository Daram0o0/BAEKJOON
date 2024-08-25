const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [T, S] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let result = 280;
if (T >= 12 && T <= 16 && S === 0) {
  result = 320;
}

console.log(result);
