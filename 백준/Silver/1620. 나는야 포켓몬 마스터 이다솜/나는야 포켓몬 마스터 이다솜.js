const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...list] = fs.readFileSync(filePath).toString().trim().split("\n");
const [book_len, problem_len] = num.split(" ").map(Number);

const book = [];
const bookMap = new Map();

let index = 0;

for (let i = 0; i < book_len; i++) {
  const name = list[index++];
  book.push(name);
  bookMap.set(name, i + 1);
}

const answer = [];

for (let i = 0; i < problem_len; i++) {
  const problem = list[index++];

  if (+problem > 0) {
    answer.push(book[problem - 1]);
  } else {
    answer.push(bookMap.get(problem));
  }
}

console.log(answer.join("\n"));