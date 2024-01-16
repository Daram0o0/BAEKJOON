function solution(array) {
    var result = 0;
    for(let i of array){
        for(let j of i+""){
            (j+"").includes("7") && result++;
        }  
    }
    return result;
}