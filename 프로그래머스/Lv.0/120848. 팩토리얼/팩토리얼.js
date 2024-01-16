function solution(n) {
    var result = 1;
    let num = 1;
    while(num<=n){
        num *= result++;
        // result++;
        console.log(num, n, result)
    }
    return result - 2;
}