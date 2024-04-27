function solution(a, b) {
    return a.reduce((acc,val,idx)=>{
        return acc + val * b[idx]
    },0)
}