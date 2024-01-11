function solution(array, n) {
    var answer = 0;
    var cal = 100;
    for(let i of array.sort()){
       if(Math.abs(i - n) < cal){
           cal = Math.abs(i - n);
           answer = i;
           console.log(cal, answer)
       }
    }
    return answer;
}