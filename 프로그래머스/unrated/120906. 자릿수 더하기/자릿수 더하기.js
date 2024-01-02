function solution(n) {
    var arr = String(n).split('').map(Number)
    var answer = arr.reduce((sum, i)=> {return sum + i});
    
    return answer;
}