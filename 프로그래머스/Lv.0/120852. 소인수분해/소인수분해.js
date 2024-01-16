function solution(n) {
    let arr = [];
    let num = n;
    let answer = [];
    
    for(let i = 2; i<=num; i++){
        if(num % i === 0 && !Number.isInteger(Math.sqrt(i))){
            arr.push(i)
            num /= i
        }
    }
    
    for(let j of arr){
        let count = 0;
        for(let k=2; k<=j; k++){
            if(j%k === 0){
                count++;
            }
        }
        if(count<2) answer.push(j)
    }
    return answer;
}