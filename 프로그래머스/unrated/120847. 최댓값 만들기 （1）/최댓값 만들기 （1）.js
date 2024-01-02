function solution(numbers) {
    var answer = 0;
    var max = -1;
    var max2 = -2;
    for( i of numbers){
            if(max < i){
                max2 = max
                max = i
                
            }
           else if(max2 < i){
               max2 = i
           }
    }
    return max * max2;
}