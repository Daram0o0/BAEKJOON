const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num = 0;
let users = {};

rl.on("line", (line) => {
  if (num === 0) {
    num = parseInt(line);
  } else {
    const [name, history] = line.trim().split(" ");
    if (history === "enter") {
      users[name] = true;
    } else {
      delete users[name];
    }
  }
});

rl.on("close", () => {
  console.log(Object.keys(users).sort().reverse().join("\n"));
});
