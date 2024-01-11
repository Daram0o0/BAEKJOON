function solution(before, after) {
    var arrB = Array(26).fill(0);
    var arrA = Array(26).fill(0);
    
    for(let i of before){
        arrB[i.charCodeAt() - 97]++;
    }

    for(let i of after){
        arrA[i.charCodeAt() - 97]++;
    }

    return arrB.join("") === arrA.join("") ? 1 : 0;
}