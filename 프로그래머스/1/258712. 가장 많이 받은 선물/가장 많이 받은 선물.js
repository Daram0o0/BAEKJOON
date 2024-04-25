function solution(friends, gifts) {
    const len = friends.length
const matrix = Array.from(Array(len), () => Array(len).fill(0))
const give = new Array(len).fill(0)
const get = new Array(len).fill(0)
const giftNum = new Array(len).fill(0)
const nextMonth = new Array(len).fill(0)

// 주고 받은 선물 배열 구하기
gifts.forEach(gift => {
  let [a, b] = gift.split(" ")
  let aIdx = friends.indexOf(a)
  let bIdx = friends.indexOf(b)
  matrix[aIdx][bIdx]++
  give[aIdx]++
  get[bIdx]++
})

// 선물지수 구하기
give.forEach((val, idx) => {
  giftNum[idx] = val - get[idx]
})

for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    let giveTemp = matrix[i][j]
    let getTemp = matrix[j][i]
    if (giveTemp !== 0 || getTemp !== 0) {
      // console.log(i, j)
      if (giveTemp < getTemp) nextMonth[j]++
      else if (giveTemp > getTemp) nextMonth[i]++
      else {
        if (giftNum[i] > giftNum[j]) nextMonth[i]++
        else if (giftNum[i] < giftNum[j]) nextMonth[j]++
      }
    }
    else {
      if (giftNum[i] > giftNum[j]) nextMonth[i]++
      else if (giftNum[i] < giftNum[j]) nextMonth[j]++
    }
  }
}

return Math.max(...nextMonth)
}