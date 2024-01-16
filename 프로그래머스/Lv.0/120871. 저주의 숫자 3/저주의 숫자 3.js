function solution(n) {
    var answer = 1;
    for(let i = 0; i<n; i++){
        while((answer+"").includes("3") || !(answer%3)){
            answer++;
        }
        answer++
    }
    return answer - 1;
}