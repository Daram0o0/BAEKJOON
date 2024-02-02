function solution(array, n) {
    return array.map(val => val - n).sort((a,b) => Math.abs(a) - Math.abs(b) || a - b)[0] + n;
}