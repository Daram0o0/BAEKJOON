function solution(arr, n) {
    var answer = [];
    if(arr.length % 2){
        for(let i = 0; i<arr.length; i++){
            i % 2?answer.push(arr[i]):answer.push(arr[i] + n)
        }
    }
    else{
        for(let i = 0; i<arr.length; i++){
            i % 2===0?answer.push(arr[i]):answer.push(arr[i] + n)
        }
    }
    return answer;
}