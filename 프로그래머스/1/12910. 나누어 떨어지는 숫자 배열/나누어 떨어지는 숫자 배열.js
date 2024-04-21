function solution(arr, divisor) {
    var answer = [];
    arr.sort((a,b)=>a-b).forEach(val =>{
        if(val%divisor===0) answer.push(val)
    })
    return answer.length===0 ? [-1] : answer;
}