function solution(num_list, n) {
    var answer = [];
    var num = num_list.length - n
    for(let i = 0; i<=num; i++){
        answer.push(num_list[i+n-1])
    }
    return answer;
}