function solution(my_string, alp) {
    var answer = '';
    for(i of my_string){
        if(i === alp){
            i = String.fromCharCode(alp.charCodeAt() - 32);
        }
        answer += i;
    }
    return answer;
}