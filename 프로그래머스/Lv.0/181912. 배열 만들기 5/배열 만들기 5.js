function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i of intStrs){
        var num = +i.slice(s,s+l)
        k < num && answer.push(num)
    }
    return answer;
}