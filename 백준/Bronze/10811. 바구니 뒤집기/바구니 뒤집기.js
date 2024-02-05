let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let count = input[0].split(" ");

let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}
numbers.map(Number)

let arr = [];
for (let i = 1; i <= Number(count[0]); i++) {
  arr.push(i)
}

numbers.forEach(([a, b]) => {
  let start = arr.slice(0, a - 1)
  let mid = arr.slice(a - 1, b).reverse()
  let end = arr.slice(b, arr.length)
  arr = start.concat(mid).concat(end)

})
console.log(arr.join(" "))