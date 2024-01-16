function solution(common) {
    var answer = 0;
    let idx = common.length - 1;
    let a = common[1]-common[0];
    let b = common[1]/common[0]
    if(a === common[2] - common[1]){
        return common[idx] + a;
    }
    else if(b === common[2]/common[1]){
        return common[idx]*b
    }

}