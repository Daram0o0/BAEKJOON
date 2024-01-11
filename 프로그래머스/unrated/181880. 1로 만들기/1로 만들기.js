function solution(num_list) {
    var answer = 0;
    for(let i of num_list){
        while(i !== 1){
            i%2 ? i = (i - 1)/2 : i = i/2;
            answer++;
        }
    }
    return answer;
}