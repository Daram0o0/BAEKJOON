const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, A, M, B] = fs.readFileSync(filePath).toString().trim().split("\n");

const input1 = new Set(A.split(" ").map(Number)); // input1을 Set으로 변환하여 O(1) 조회
const input2 = B.split(" ").map(Number);

const answer = input2.map((val) => (input1.has(val) ? 1 : 0)); // Set.prototype.has를 사용하여 O(1) 조회
console.log(answer.join(" "));