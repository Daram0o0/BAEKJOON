function solution(num_list, n) {
    var answer = 0;
    for(i of num_list){
        num_list.includes(n) ? answer =1 :answer;
    }
    return answer;
}