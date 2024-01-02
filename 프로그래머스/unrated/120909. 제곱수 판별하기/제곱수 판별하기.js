function solution(n) {
    var answer = 0;
    var s = 0;
    var t = 0;
    
    for(let i = 1; i<n/2; i++){
        s = n/i;
        if(s === i) {
            answer = 1;
            break;
        }
        answer =2;
    }
    return answer;
}