function solution(my_str, n) {
    var answer = [];
    var num = Math.ceil(my_str.length / n);
    
    for(let i = 0; i<num; i++){
        answer.push(my_str.slice(n*i, n + n*i))
    }
    return answer;
}