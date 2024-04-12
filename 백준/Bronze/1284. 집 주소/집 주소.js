let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "0") console.log(calculate(input[i]))
}

function calculate(str) {
  let answer = 0;
  str.split("").forEach(val => {
    if (val == "1") answer += 2;
    else if (val == "0") answer += 4;
    else answer += 3;
  })
  answer = str.length + 1 + answer

  return answer
}