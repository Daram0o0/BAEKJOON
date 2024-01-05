function solution(n) {
    var answer = 0;
    
    
    for(let i = 1; i<=n; i++){
        var num = 0;
        for(let j = 1; j<=i; j++){
            if(i % j === 0){
               num++;
                if(num >= 3){
                answer++;
                    break;
            }
            }
            
        }
    }
    return answer;
}