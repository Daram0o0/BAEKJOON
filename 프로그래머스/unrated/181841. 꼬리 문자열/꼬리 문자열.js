function solution(str_list, ex) {
    var answer = '';
    for(i of str_list){
        !i.includes(ex) ? answer += i : answer;
    }
    return answer;
}