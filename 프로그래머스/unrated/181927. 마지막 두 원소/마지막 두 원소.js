function solution(num_list) {
    var answer = num_list;
    var num = num_list.length - 1;
    
    answer.push(num_list[num] > num_list[num-1] ? num_list[num] - num_list[num - 1] : num_list[num] * 2)
    return answer;
}