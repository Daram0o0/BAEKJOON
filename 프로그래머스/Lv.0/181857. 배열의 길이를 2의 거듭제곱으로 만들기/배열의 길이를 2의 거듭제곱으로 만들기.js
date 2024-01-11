function solution(arr) {
    var answer = [];

    for(let i = 0; i<=10; i++){
        var len = 2**i - arr.length;
        if(len>0){
            for(let j = 0; j<len; j++){
                arr.push(0)
            }
            break;
        }
        else if(len === 0){
            break;
        }
    }
    return arr;
}