function solution(a, b, c) {
    var sum = a + b + c;
    var sum2 = a**2 + b**2 + c**2;
    var sum3 = a**3 + b**3 + c**3;
    if(a===b && b===c){
        return sum * sum2 * sum3;
    }
    else if(a!==b && b!==c && c!==a){
        return sum;
    }
    else{
        return sum * sum2
    }
}