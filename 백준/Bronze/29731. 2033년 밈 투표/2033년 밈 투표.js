const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...lines] = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = "No";

const lineSet = new Set([
  "Never gonna give you up",
  "Never gonna let you down",
  "Never gonna run around and desert you",
  "Never gonna make you cry",
  "Never gonna say goodbye",
  "Never gonna tell a lie and hurt you",
  "Never gonna stop",
]);

for (const line of lines) {
  if (!lineSet.has(line)) {
    answer = "Yes";
    break;
  }
  lineSet.add(line);
}

console.log(answer);