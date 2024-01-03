function solution(arr) {
    var answer = [];
    for(i of arr){
        if(i>=50 && i%2===0){
            i /= 2
        }
        else if(i<50 && i%2){
            i *= 2
        }
        answer.push(i)
    }
    return answer;
}