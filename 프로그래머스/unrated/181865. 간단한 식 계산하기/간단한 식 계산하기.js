function solution(binomial) {
    var answer = 0;
    var arr = binomial.split(" ")
    if(arr[1] === "+"){
        return +arr[0] + +arr[2];
    }
    else if(arr[1] === "-"){
        return +arr[0] - +arr[2];
    }
    else{
        return +arr[0] * +arr[2];
    }
}