function solution(picture, k) {
    var answer = [];

    for(let i of picture){
        var str = '';
        for(let j of i){
            for(let l = 0; l<k; l++)
                str += j
        }
        for(let l = 0; l<k; l++)
            answer.push(str)
    }
    return answer;
}