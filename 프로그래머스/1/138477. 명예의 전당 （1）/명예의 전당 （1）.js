function solution(k, score) {
    let answer = [];
    let arr = [];
    let min = -1;
    
    score.forEach((val) => {
        if(arr.length >= k){
            if(min < val){
                arr.shift();
                arr.push(val);
            }
        }
        else{
            arr.push(val);
        }
        
        arr.sort((a,b)=> a - b);
        min = arr[0];
        answer.push(min)
    })
    
    return answer;
}

// 조건 : 배열 3개로 유지.

// [10] / min = 10
// [10, 100] / min = 10
// [10, 100, 20] => [10, 20, 100] / min = 10
// [20, 100, 150]  min < 150 ? arr.shift(); arr.push(150); : 할거없음. / min = Math.min(...arr) = 20
// [20, 100, 150] 