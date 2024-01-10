function solution(numLog) {
    var answer = '';
    for(let i = 0; i<numLog.length - 1; i++){
        answer += cal(numLog[i],numLog[i+1])
    }
    return answer;
}

function cal(first, second){
    if (second - first === 1) return "w";
    if (second - first === -1) return "s";
    if (second - first === 10) return "d";
    if (second - first === -10) return "a";
}