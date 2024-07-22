const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

let totalCents = input.reduce(
  (acc, curr) => acc + Math.round(parseFloat(curr) * 100),
  0
);

const totalEuros = totalCents / 100;

console.log(totalEuros.toFixed(2));