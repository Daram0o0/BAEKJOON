function solution(numbers, num1, num2) {
    var answer = [];
    for(let i = num1; i<numbers.length; i++){
        if(num2 >= i){
            answer.push(numbers[i]);
        }
        else{
            break;
        }
    }
    return answer;
}