function solution(left, right) {
    return countFactor(left,right);
}

function countFactor(a,b){
    let count = 0;
    for(let i = a; i<=b; i++){
        if(Number.isInteger(Math.sqrt(i))) count -= i
        else count += i
    }
    return count
}