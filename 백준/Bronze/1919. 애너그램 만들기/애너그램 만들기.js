let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const str1 = input[0]
const str2 = input[1]

function isAnagram(A, B) {
  const hashMap = {}
  let diff = 0

  for (const charA of A) {
    hashMap[charA] = (hashMap[charA] || 0) + 1
  }
  for (const charB of B) {
    hashMap[charB] = (hashMap[charB] || 0) - 1
  }

  for (const char in hashMap) {
    diff += Math.abs(hashMap[char])
  }

  console.log(diff)
}

isAnagram(str1, str2)