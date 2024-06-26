const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, input1, m, input2] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr1 = input1.split(" ");
const arr2 = input2.split(" ");

const myMap = new Map();

arr1.forEach((val) => {
  if (myMap.has(val)) {
    myMap.set(val, myMap.get(val) + 1);
  } else {
    myMap.set(val, 1);
  }
});

const arr = [];

arr2.forEach((val) => {
  if (myMap.has(val)) {
    arr.push(myMap.get(val));
  } else {
    arr.push(0);
  }
});

console.log(arr.join(" "));