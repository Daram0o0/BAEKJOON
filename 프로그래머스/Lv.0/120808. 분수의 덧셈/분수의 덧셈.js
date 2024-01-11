function solution(numer1, denom1, numer2, denom2) {
    var a = numer1*denom2 + denom1*numer2;
    var b = denom1*denom2;
    var answer = [];
    for(let i = b; i>0; i--){
        if(a%i === 0 && b%i === 0) {
            answer.push(a/i,b/i);
            break;
        }
    }
    return answer;
}