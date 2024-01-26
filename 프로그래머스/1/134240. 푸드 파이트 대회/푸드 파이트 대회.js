function solution(food) {
    var answer = [];
    for(let i = 1; i<food.length; i++){
        for(let j = 0; j<Math.floor(food[i]/2); j++){
            answer.push(i+"")
        }
    }
    return answer.join("")+"0"+answer.reverse().join("");
}

// 물, 3개, 4개, 6개
// a : 1개, 2개, 3개

// 물, 7개, 1개, 2개
// a : 3개, 0개, 1개

