function solution(arr) {
    var answer = [];
    for(let i = 0; i<arr.length; i++){
        !(i%2) ? answer.push(arr[i].toLowerCase()) : answer.push(arr[i].toUpperCase());
    }
    return answer;
}