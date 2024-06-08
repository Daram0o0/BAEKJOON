const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()

let num = +input

if (620 <= num && num <= 780) console.log("Red")
else if (590 <= num && num < 620) console.log("Orange")
else if (570 <= num && num < 590) console.log("Yellow")
else if (495 <= num && num < 570) console.log("Green")
else if (450 <= num && num < 495) console.log("Blue")
else if (425 <= num && num < 450) console.log("Indigo")
else if (380 <= num && num < 425) console.log("Violet")
else console.log("Unknown")