function solution(left, right) {
    var answer = 0;
    for(let i = left; i<right+1; i++){
        var count = 0;
        for(let j = 1; j<i+1; j++){
            i%j === 0 && count++;
        }
        
        count%2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}