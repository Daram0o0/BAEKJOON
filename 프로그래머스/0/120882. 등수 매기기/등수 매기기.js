function solution(score) {
    let sum = score.map(val => val[0]+val[1])
    let arr = [...sum].sort((a, b) => b - a)
    
    return sum.map(val => arr.indexOf(val) + 1)
}