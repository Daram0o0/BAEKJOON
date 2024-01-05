function solution(strArr) {
    var answer = [];
    for(let i of strArr){
        !(i.includes("ad")) ? answer.push(i) : answer;
    }
    return answer;
}