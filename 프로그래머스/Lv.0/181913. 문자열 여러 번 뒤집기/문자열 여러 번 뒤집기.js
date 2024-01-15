function solution(my_string, queries) {
    var answer = my_string;
    var size = my_string.length;
    
    
    for(let i of queries){
        var arr = answer.split('');
        answer = ''
        answer += arr.slice(0,i[0]).join('')
        answer += arr.slice(i[0] ,i[1]+1).reverse().join('') 
        answer += arr.slice(i[1]+1,size+1).join('') 
    }
    
    return answer
}