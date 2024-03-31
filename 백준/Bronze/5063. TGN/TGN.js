let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const num = +input[0]

for (let i = 0; i < num; i++) {
  let array = input[i + 1].split(" ").map(Number)
  compare(array)
}

function compare(arr) {
  const [r, e, c] = arr
  if (r < e - c) console.log("advertise")
  else if (r == e - c) console.log("does not matter")
  else console.log("do not advertise")
}