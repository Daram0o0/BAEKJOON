function solution(num) {
  var answer = 0;
  while (num > 1) {
    num = returnToOne(num)
    answer++
    if (answer === 500) {
      answer = -1
      break
    }
  }
  return answer;
}

function returnToOne(num) {
  if (num % 2 !== 0) return num * 3 + 1
  else return num / 2
}