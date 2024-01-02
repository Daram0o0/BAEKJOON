function solution(num_list) {
    var answer = [];
    var even = 0;
    var odd = 0;
    for(i of num_list){
        i%2==0 ? even++ : odd++
    }
    answer.push(even)
    answer.push(odd)
    return answer;
}