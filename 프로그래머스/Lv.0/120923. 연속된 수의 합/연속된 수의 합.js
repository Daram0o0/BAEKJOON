function solution(num, total) {
    var answer = [];
    var first = Math.ceil(total/num) - Math.floor(num/2);
    for(let i = first; i<num+first; i++){
        answer.push(i);
    }
    return answer;
}