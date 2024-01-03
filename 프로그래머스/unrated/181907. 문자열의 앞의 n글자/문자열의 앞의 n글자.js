function solution(my_string, n) {
    var answer = [];
    var str = my_string.split('')
    for(let i = 0; i<n; i++){
        answer.push(str[i]);
    }
    return answer.join('');
}