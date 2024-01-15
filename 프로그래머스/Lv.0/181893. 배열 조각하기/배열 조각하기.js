function solution(arr, query) {
    var answer = arr;
    
    for(let i=0; i<query.length; i++){
        if(i%2){
            answer = answer.slice(query[i],answer.length)
        }
        else{
            answer = answer.slice(0,query[i]+1)
        }
        console.log(i,answer)
    }
    return answer;
}