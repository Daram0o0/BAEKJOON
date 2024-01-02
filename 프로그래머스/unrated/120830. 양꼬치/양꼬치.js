function solution(n, k) {
    var answer = 0;
    let s = 12000;
    let d = 2000;
    
    answer = n*s + k*d - Math.floor(n/10) * d;
    return answer;
}