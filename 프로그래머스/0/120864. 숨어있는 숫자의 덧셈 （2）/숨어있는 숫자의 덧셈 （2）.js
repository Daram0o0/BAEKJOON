function solution(my_string) {
  let ans = my_string.match(/\d+/g);
  return ans ? ans.map(Number).reduce((a, b) => a + b, 0) : 0;
}