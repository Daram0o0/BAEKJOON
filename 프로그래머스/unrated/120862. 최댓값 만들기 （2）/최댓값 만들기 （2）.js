function solution(numbers) {
  var max = -100000000;
  for (let i = 0; i<numbers.length; i++) {
    var arr = numbers.filter((ele) => numbers.indexOf(ele) !== i);

    for (j of arr) {
      numbers[i] * j > max ? max = numbers[i] * j : max;
    }
  }
  return max;
}