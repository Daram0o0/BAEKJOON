function solution(absolutes, signs) {
    
    let answer = absolutes.reduce((acc,val,idx)=>{
        if(signs[idx]) return acc+val
        else return acc-val
    },0)
    
    return answer;
}