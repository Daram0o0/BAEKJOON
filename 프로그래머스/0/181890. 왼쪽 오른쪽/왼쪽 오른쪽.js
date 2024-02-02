function solution(str_list) {
    let result = [];
    let left = str_list.indexOf("l");
    let right = str_list.indexOf("r");
    

    if(left === -1){
        if(right === -1) return result;
        else result = str_list.slice(right + 1)
    }
    else if(right === -1){
        if(left === -1) return result;
        else result = str_list.slice(0,left)
    } 
    else if(left < right) result = str_list.slice(0,left)
    else if(left > right) result = str_list.slice(right+1)
    

    return result;
}