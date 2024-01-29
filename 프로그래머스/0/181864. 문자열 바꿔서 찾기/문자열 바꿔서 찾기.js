function solution(myString, pat) {
    var answer = "";
    myString.split("").forEach(val => val === "A" ? answer += "B" : answer += "A")
    
    return answer.includes(pat) ? 1 : 0;
}