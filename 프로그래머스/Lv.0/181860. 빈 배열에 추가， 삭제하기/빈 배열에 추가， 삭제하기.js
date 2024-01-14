function solution(arr, flag) {
    var answer = [];
    var size = arr.length;
    for(let i = 0; i<size; i++){
        if(flag[i]){
            for(let j = 0; j<arr[i]*2; j++){
                answer.push(arr[i])
            }
        }
        else {
            for(let j = 0; j<arr[i]; j++){
                answer.pop()
            }
        }
    }
    return answer;
}