function solution(array, height) {
    var answer = 0;
    for(i of array){
        height<i && answer++;
    }
    return answer;
}