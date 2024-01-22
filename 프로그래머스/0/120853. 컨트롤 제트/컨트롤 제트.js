function solution(s) {
    let answer = 0;
    let arr = s.split(" ");
    for(let i=0; i<arr.length; i++){
        arr[i] !== "Z" ? answer += (+arr[i]) : answer -= (+arr[i - 1]);
    }
    return answer;
}