function solution(l, r) {
    var answer = [];
    for(let i = l; i<r+1; i++){
        if((i+"").includes("5") || (i+"").includes("0")){
            if(!(i+"").includes("1") && !(i+"").includes("2") && !(i+"").includes("3") && !(i+"").includes("4") && !(i+"").includes("6") && !(i+"").includes("7") && !(i+"").includes("8") && !(i+"").includes("9")){
                answer.push(i)
            }
                
        }
    }
    
    if(answer.length === 0) answer.push(-1)
    
    return answer;
}