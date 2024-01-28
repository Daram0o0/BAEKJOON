function solution(n, m, section) {
    var answer = 0;
    let arr = new Array(n).fill(1);
    
    for(let i of section){
        arr[i - 1] = 0
    }
    
    let sec = section.sort((a,b)=>b - a)
    while(arr.includes(0)){
        answer++;
        let start = sec[0]
        let end = sec[0] - m 
        for(let i = start; i>end; i--){
            if(section.includes(i)) section.shift();
            
            arr[i - 1] = 1;
        }
        
        // console.log(start, end < Math.min(...section))
    }
    return answer;
}


// arr = [1,0,0,1,1,0,1,1]
// 조건 : arr가 모두 1인가?
// 6 ~ 3 / 5 ~ 2
// section하나씩 부터 2+m - 1까지 / 돌면서 1로 만들기