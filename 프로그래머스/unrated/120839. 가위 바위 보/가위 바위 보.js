function solution(rsp) {
    var answer = '';
    var s = "2"; //p = 5
    var r = "0"; //s = 2
    var p = "5"; //r = 0
    
    rsp.split('').map(Number)
    
    for(i of rsp){
        if(i === r){
            answer += p
        }
        else if(i === s){
            answer += r
        }
        else if(i === p){
            answer += s
        }
    }
    return answer;
}