const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim()


console.log(`:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`)
