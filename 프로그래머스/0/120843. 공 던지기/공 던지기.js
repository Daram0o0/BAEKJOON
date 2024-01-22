function solution(numbers, k) {
    let answer = numbers;
    
    for(let i = 0; i<k - 1; i++){
        answer.push(answer.shift(0))
        answer.push(answer.shift(0))

    }
    
    return answer[0];
}