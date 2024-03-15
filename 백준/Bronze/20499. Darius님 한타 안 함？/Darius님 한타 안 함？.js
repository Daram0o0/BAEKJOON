let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [K, D, A] = require("fs").readFileSync(filePath).toString().split("/").map(Number);
let answer = "gosu";

if (K + A < D || D == 0) answer = "hasu"

console.log(answer)