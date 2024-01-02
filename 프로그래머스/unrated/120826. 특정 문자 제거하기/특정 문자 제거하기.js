function solution(my_string, letter) {
    var answer = '';
    for(i of my_string){
        i === letter ? answer += '' : answer+=i
    }
    return answer;
}