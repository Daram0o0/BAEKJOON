function solution(n, m) {
//     최대공약수 : 둘 다 나눠지는 수
//     최소공배수 : 공약수들의 곱..?(두 수 곱해서 최대공약수로 나누나..?)
    let max = 1;
    let min = 1;
    for(let i = 1; i<=n; i++){
        if(n%i===0 && m%i===0) max = i;
    }
    
    min = n * m / max
    
    return [max,min];
}