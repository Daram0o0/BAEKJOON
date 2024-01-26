function solution(a, b, n) {
    let answer = 0; //받은 총 콜라 수
    let result = 0; //회당 받은 콜라 수
    let coke = n; //회당 콜라 수
    
    while(coke>=a){
        let temp = coke;
        result = Math.floor(temp / a) * b;
        coke = temp % a + result;
        answer += result;
        console.log(coke, result, answer)
    }
    return answer;
}

// 코크 총 개수 = 코크 나머지 개수 + 코크 받은 개수
// 20 => 10 + 0
// 10 => 5 + 0
// 5 => 2 (1)
// 2 => 1
// 1 + (1) => 1 + 0

// 20 (18) => 6
// 6 => 2
// 2 + 2 (3) => 1