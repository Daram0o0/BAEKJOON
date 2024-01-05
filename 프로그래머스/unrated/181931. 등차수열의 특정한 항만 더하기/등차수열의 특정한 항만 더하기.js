function solution(a, d, included) {
    var answer = 0;
    var arr = [];
    for(let i = 1; i<=included.length; i++){
        arr.push(a + (i - 1) * d)
    }
    for(let i = 1; i<=included.length; i++){
        (included[i - 1] === true) ? answer += arr[i - 1] : answer;
    }

    return answer;
}