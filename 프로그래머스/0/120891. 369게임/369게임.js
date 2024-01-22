function solution(order) {
  var str = order.toString().match(/[369]/g);

  return str ? str.length : 0;
}