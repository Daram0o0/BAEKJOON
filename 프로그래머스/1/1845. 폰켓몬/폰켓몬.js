function solution(nums) {
    let len = nums.length/2;
    let pocket = new Map();
    
    for(let num of nums){
        if(!pocket.get(num)) pocket.set(num, 1)
        else pocket.set(num, pocket.get(num)+1)
    }
    
    if(pocket.size > len) return len
    else return pocket.size
}