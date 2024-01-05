function solution(myString, pat) {
    var answer = 0;
    var num = pat.length;
    
    for(let i = 0; i<=myString.length - num; i++){
        myString.slice(i, i + num) === pat && answer++
    }
    return answer;
}