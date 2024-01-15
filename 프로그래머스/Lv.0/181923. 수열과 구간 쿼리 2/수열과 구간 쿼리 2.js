function solution(arr, queries) {
    var answer = [];
    for(let i of queries){
        var min = 1000000;
        for(let j = i[0]; j<=i[1]; j++){
            if(arr[j] > i[2] && min>arr[j]){
                min = arr[j]
            }  
        }
        min === 1000000 ? answer.push(-1) : answer.push(min)
    }
    return answer;
}