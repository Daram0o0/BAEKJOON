function solution(numbers) {
    var answer = 0;
    var count = numbers.length;
    
    for (let i = 0; i< count; i++){
        answer += numbers[i]
    }
    return answer/count;
}