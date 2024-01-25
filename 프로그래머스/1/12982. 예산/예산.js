function solution(d, budget) {
    let sum = 0;
    let result = 0;
    let arr = d.sort((a,b)=>a-b)
    for(let i of arr){
        sum += i;
        if(budget >= sum) result++;
        else break;  
    }
    return result;
}