function solution(n, m) {
    let max = gcd(n,m)
let min = n * m /max
    return [max,min];
}

function gcd(a, b) {
    // 만약 b가 0이면, a를 반환
    if (b === 0) {
        return a;
    }
    // 그렇지 않으면, a를 b로 나눈 나머지를 구하고 이를 새로운 b로 대체하고, 이전의 b를 새로운 a로 대체하여 재귀 호출
    return gcd(b, a % b);
}
