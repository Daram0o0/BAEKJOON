function solution(t, p) {
    let size = p.length;
    let count = 0;
    
    for(let i = 0; i<=t.length - size; i++){
        +t.slice(i,i+size) <= +p ? count++ : count
    }
    return count;
}