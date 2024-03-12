let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [month, date] = require("fs").readFileSync(filePath).toString().split(" ").map(Number);

const months = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

function calculateDay(_month, _date) {
  let date = _date
  for (let i = 1; i < _month; i++) {
    date += months[i]
  }
  let dayNum = date % 7

  return days[dayNum]
}

console.log(calculateDay(month, date))