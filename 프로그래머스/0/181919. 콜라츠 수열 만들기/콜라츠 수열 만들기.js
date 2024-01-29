function solution(n) {
    var answer = [n];
    let num = n;
    
    while(num>1){
        num = num%2 === 0 ? num/2 : num*3 + 1
        answer.push(num)
    }
    
    return answer;
}