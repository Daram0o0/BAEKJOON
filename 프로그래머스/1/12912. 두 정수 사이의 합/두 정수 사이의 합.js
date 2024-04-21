function solution(a, b) {
    const arr = [a,b].sort((a,b)=>a-b)
    var answer = 0
    
    for(let i = arr[0]; i<=arr[1]; i++)
        answer+=i

    return answer;
}