function solution(n) {
    var answer = [n];
    var num = n;
    while(true){
        if(answer[answer.length - 1] === 1){
            break
        }
        else{
            num = isEven(num);
            answer.push(num);
        }
    }
    

    return answer;
}

const isEven = (e) => { return !(e%2) ? e/2 : 3 * e + 1}