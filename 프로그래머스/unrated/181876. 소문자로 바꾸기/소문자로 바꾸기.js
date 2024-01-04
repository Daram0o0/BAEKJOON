function solution(myString) {
    var answer = '';
    for(i of myString){
        if(i.charCodeAt()>=65 && i.charCodeAt()<=90){
            i = String.fromCharCode(i.charCodeAt() + 32)
        }
        answer += i
    }
    return answer;
}