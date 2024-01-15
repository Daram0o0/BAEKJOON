function solution(arr) {
    var answer = [];
    for(let i = arr.indexOf(2); i<arr.lastIndexOf(2)+1; i++){
        answer.push(arr[i])
    }
    return answer.includes(2) ? answer : [-1];
}