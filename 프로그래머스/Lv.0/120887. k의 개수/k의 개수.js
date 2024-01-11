function solution(i, j, k) {
    var answer = 0;
    for(let s = i; s<=j; s++){
        (s+"").split("").map((e)=>e===k+"" && answer++)
    }
    return answer;
}