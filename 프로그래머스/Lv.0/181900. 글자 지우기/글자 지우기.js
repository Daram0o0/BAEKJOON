function solution(my_string, indices) {
    var answer = '';
    var arr = my_string.split('');
    
    for(let i of indices){
       arr[i] = 0
    }
    
    
    return arr.join("").replaceAll(0,"");
}