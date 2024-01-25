function solution(sides) {
    let answer = [];
    
//     1. 가장 긴 변이 sides의 max값인 경우
//     2. 가장 긴 변이 나머지 값인 경우
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    
    for(let i = 1; i < max; i++){
        max < min + i && answer.push(i)
    }
    
    for(let i = max; i<max+min; i++){
       answer.push(i)
    }
    return answer.length;
}