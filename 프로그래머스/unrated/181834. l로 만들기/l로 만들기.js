function solution(myString) {
    var answer = '';
    myString.split('')
    for(let i of myString){
        if(i.match(/[a-l]/g)) {
            i = i.replace(i,"l")
        }
        answer += i;
    }
    return answer;
}