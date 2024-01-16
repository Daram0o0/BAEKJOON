function solution(A, B) {
    var answer = 0;
    for(let i =1; i<A.length; i++){
        answer++;
      if(A.slice(A.length-i)+A.slice(0,A.length-i) === B){
            return answer;
        }
        else if(A === B){
            return 0;
        }
    }
    return -1;
}