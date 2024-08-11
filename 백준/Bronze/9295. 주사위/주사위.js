const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...lines] = fs.readFileSync(filePath).toString().trim().split("\n");

lines.forEach((val, idx) => {
  const [a, b] = val.split(" ").map(Number);
  console.log(`Case ${idx + 1}: ${a + b}`);
});
