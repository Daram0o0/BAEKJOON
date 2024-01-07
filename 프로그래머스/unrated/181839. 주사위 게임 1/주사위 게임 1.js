function solution(a, b) {
    var answer = 0;
    if(a%2 && b%2){
        return a**2 + b**2;
    }
    else if((a%2 && !(b%2)) || (!(a%2) && b%2)){
        return 2*(a + b);
    }
    else{
        return a > b ? a - b : b - a
    }
}