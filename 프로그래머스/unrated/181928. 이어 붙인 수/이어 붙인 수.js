function solution(num_list) {
    var ans1 = '';
    var ans2 = '';
    for(i of num_list){
        i%2===0 ? ans2 += i+"" : ans1 += i+""
    }
    answer = +ans1 + +ans2
    return answer;
}