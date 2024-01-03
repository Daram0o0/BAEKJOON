function solution(my_string, index_list) {
    var answer = '';
    var str = my_string.split('')
    for(i of index_list){
        answer += str[i]
    }
    return answer;
}