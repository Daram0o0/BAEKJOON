function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share))
}

function factorial(num){
        let returnNum = BigInt(1);
        for(let i = num; i>=1; i--){
            returnNum *= BigInt(i);
        }
        
        return returnNum
    }