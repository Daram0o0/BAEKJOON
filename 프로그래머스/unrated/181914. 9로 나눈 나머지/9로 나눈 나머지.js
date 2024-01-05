function solution(number) {
    return number.split("").map(Number).reduce((a, b) => {return a+b}) % 9;
}