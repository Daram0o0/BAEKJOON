function solution(arr) {
    let ans = 0;
    while(true){
        const changeArray = arr.map((e)=>{
            if(e>=50 && !(e%2)) return e/2
            if(e<50 && e%2) return e*2 + 1;
            return e;
        });
        
        const nextArray = arr.every((val, idx) => val === changeArray[idx])
        if(nextArray) break;
        
        ans++;
        
        arr = changeArray;
    }
    return ans
}