function solution(arr) {
    var answer = [];
    for(i of arr){
        var j = i
        while(j --){
            answer.push(i)
        }
        
    }
    return answer;
}