function solution(strArr) {
    var answer = [];
    
    for(let i = 1; i<=30; i++){
        var count = 0;
        strArr.map((a)=>{
            a.length === i && count++;    
        })
        if(count >= 2){
            answer.push(count);
        }
    }
    return Math.max.apply(null,answer);
}