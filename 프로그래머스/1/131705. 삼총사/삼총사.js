function solution(number) {
    let result = []
    let size = number.length
    
    for(let i = 0; i<size; i++){
        for(let j = i+1; j<size; j++){
            for(let k = j+1; k<size; k++){
                result.push(number[i] + number[j] + number[k])
            }
        }
    }
    
    return result.filter(ele => ele === 0).length;
}