function solution(n) {
    let answer = (n+"").split("").map(Number).sort((a,b)=>b-a).join("")
    return +answer;
}