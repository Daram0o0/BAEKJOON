function solution(arr)
{
    var answer = [];

    arr.forEach((val,idx) => {
        if(arr[idx - 1] !== arr[idx]) answer.push(val);
    })
    
    return answer;
}