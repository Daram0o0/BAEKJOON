function solution(a, b) {   
//         1. 최대공약수 구하기 (둘 다 나눠지는 수)
//         2. 분모를 최대공약수로 나누기
//         3. 분모를 계속해서 2와 5로 나누기
//         4. 분모가 1이라면 유한소수(1), 아니라면 무한소수(2)
    
    let num = 1;
    
    for(let i = 1; i<=a; i++){
        a % i === 0 && b % i === 0 ? num = i : num;
    }
    
    b /= num
    
    while(b%2 === 0) b /= 2;
    while(b%5 === 0) b/=5;

    return b === 1 ? 1 : 2;
}