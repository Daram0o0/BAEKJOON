function solution(numbers) {
    let sum = (0+9)*10/2
    numbers.forEach(val=>sum-=val)
    return sum;
}