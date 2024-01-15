function solution(n, slicer, num_list) {
    var answer = [];
    var a = slicer[0];
    var b = slicer[1];
    var c = slicer[2];
    
    if(n === 1){
        return num_list.slice(0,b+1)
    }
    else if(n === 2){
        return num_list.slice(a,num_list.length+1)
    }
    else if(n === 3){
        return num_list.slice(a,b+1)
    } 
    else if(n === 4){
        for(let i = a; i<b+1; i+=2){
            answer.push(num_list[i])
        }
    }
    return answer;
}