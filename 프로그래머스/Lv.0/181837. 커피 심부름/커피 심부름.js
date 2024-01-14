function solution(order) {
    var answer = 0;
    for(let i of order){
        if(i.includes("cafelatte")){
            answer += 5000;
        }
        else if(i.includes("americano") || i.includes("anything")){
            answer += 4500;
        }
        
    }
    return answer;
}