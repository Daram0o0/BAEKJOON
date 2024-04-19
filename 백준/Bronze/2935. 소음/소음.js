let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [first, a, last] = require("fs").readFileSync(filePath).toString().trim().split("\n")
let result;
if (a === "*") {
  result = BigInt(first) * BigInt(last)
}
else {
  result = BigInt(first) + BigInt(last)
}

console.log(result + "")