function solution(my_string) {
    var answer = '';
    my_string.split('')
    for(i of my_string){
        if(i.charCodeAt()>=97){
            i = String.fromCharCode(i.charCodeAt() - 32)
        }else{
            i = String.fromCharCode(i.charCodeAt() + 32)
        }
        answer += i
    }
    
    return answer;
}