function solution(arr) {
    var answer = [];
    let num = 1
    while(num < arr.length) num *= 2
    
    while(num - arr.length > 0) arr.push(0)
    
    return arr;
}