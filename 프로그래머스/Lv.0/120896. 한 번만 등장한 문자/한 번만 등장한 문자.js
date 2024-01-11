function solution(s) {
    var arr = Array(26).fill(0);
    var answer = '';
    for(let i of s){
        arr[i.charCodeAt() - 97]++
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 1){
            answer+= String.fromCharCode(i + 97)
        }   
    }
    return answer;
}