function solution(my_string) {
  return my_string.split(/\D+/g).map(Number).reduce((a, c) => a + c, 0);
}