function solution(nums) {
    var answer = 0;
    let arr = [];
    
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            for(let k = j+1; k<nums.length; k++){
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }

    arr.forEach(val => {
        let num = 0;
        for(let i = 1; i<=val; i++){
            if(val % i === 0) num++;
            
        }
        console.log(val, num)
        
        num === 2 ? answer++ : answer;
    } )
    
    return answer;
}