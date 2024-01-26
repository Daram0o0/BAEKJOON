function solution(numbers) {
    var result = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
            let sum = numbers[i] + numbers[j]
            result.indexOf(sum)===-1 && result.push(numbers[i] + numbers[j])
        }
    }
    return result.sort((p, c) => p - c);
}