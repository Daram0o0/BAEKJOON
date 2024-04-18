let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [girl, boy, com] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number)

let team = 0
let person = girl + boy
let answer
while (true) {
  girl -= 2
  boy -= 1
  if (girl < 0 || boy < 0) break
  team++
}

person -= team * 3
// console.log(team, person)

while (true) {
  if (person <= 0 || com <= 0) break
  person--
  com--
}

answer = team
// console.log(person, com)
if (com > 0) {
  let share = Math.floor(com / 3)
  let remind = com % 3
  if (remind > 0) {
    answer -= (share + 1)
  }
  else answer -= share
}

console.log(answer)