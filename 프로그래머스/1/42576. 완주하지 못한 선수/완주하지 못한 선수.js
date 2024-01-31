function solution(participant, completion) {
    var answer = '';
    let bool = false;
    let part = participant.sort();
    let com = completion.sort();
    
    
    part.forEach((val,idx) => {
        if(bool === true){
            answer;
        }
        else if(part[idx] !== com[idx]) {
            answer = val;
            bool = true;
        }
    })
    return answer;
}