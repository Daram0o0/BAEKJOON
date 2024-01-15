function solution(arr, idx) {
    var answer = -1;

    for(let i = idx; i<arr.length; i++){
        
        if(arr[i] === 1){
            answer = i
            break;
        }
        console.log(i, idx, answer)
    }
    
    return answer;
}