function solution(polynomial) {
    var answer = [];
    var arr = polynomial.split(' + ')
    let x = arr.filter(v => v.includes('x')).map(val => parseInt(val.replace('x','')) || 1)
    let a = arr.filter(v => !v.includes('x')).map(Number)
    let xSum = x.reduce((a,c)=> a+c, 0)
    let aSum = a.reduce((a,c)=> a+c, 0)
    
    if(xSum){
        xSum === 1 ? answer.push("x") : answer.push(xSum+"x")   
        if(aSum){
            answer.push(aSum)
        }
        
    }
    else{
        answer.push(aSum)
    }
    
    return answer.join(' + ');
}