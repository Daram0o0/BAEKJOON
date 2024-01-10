function solution(my_string) {
    var answer = [];
    var len = my_string.length;
    for(let i = 0; i<len; i++){
        answer.push(my_string.slice(i,len))
    }
    return answer.sort();
}