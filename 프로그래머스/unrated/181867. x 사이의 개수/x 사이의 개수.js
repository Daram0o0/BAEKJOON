function solution(myString) {
    var answer = [];
    var num = 0;
    for(i of myString){
        if(i !== "x"){
            num++ 
        }
        else{
            answer.push(num);
            num = 0;
        }
    }
    
    answer.push(num);
    return answer;
}