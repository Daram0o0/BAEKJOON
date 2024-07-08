const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const list = {
  Algorithm: 204,
  DataAnalysis: 207,
  ArtificialIntelligence: 302,
  CyberSecurity: "B101",
  Network: 303,
  Startup: 501,
  TestStrategy: 105,
};

arr.forEach((val) => console.log(list[val]));