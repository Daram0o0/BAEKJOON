const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "test.txt").toString().trim().split(" ").map(Number);

let answer = 0;

for (let i = 0; i < input.length; i++) {
  answer += input[i];
}

console.log(answer)