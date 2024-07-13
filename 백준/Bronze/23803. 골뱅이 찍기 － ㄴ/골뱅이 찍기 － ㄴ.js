const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const num = fs.readFileSync(filePath).toString().trim();

const makeSnail = (num) => {
  for (let i = 0; i < num; i++) {
    console.log("@".repeat(num));
    console.log("@".repeat(num));
    console.log("@".repeat(num));
    console.log("@".repeat(num));
  }
  for (let j = 0; j < num; j++) {
    console.log("@@@@@".repeat(num));
  }
};

makeSnail(num);