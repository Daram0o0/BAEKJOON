function solution(str_list) {
    var answer = [];
    var left = str_list.indexOf("l");
    var right = str_list.indexOf("r");
    var size = str_list.length;
    
    console.log(left, right)
    if((left !== -1 && left < right) || (right === -1 && left>right)){
        for(let i = 0; i<left; i++){
            answer.push(str_list[i])
        }
    }
    else if( (right !== -1 && left > right) || (left === -1 && left<right)){
        for(let i = right+1; i<size; i++){
            answer.push(str_list[i])
        }
    }
    else if(left === -1 && right === -1){
        return answer
    }
    
    return answer;
}