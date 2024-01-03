function solution(n, numlist) {
    var answer = [];
    for(i of numlist){
        i%n === 0 && answer.push(i)
    }
    return answer;
}