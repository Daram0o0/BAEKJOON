function solution(my_string) {
    var answer = Array(52).fill(0);
    for(i of my_string){
        if(i.match(/[a-z]/g))
            answer[i.charCodeAt() - 97 + 26]++
        else if(i.match(/[A-Z]/g))
            answer[i.charCodeAt() - 65]++
    }
    return answer;
}