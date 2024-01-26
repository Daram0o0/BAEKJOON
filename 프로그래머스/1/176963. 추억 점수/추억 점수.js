function solution(name, yearning, photo) {
    let answer = [];
    
    photo.forEach((names, i) => {
        let sum = 0;
        names.forEach((val, idx) => {
            sum += yearning[name.indexOf(val)] ? yearning[name.indexOf(val)] : 0
        })
        answer.push(sum)
    })
    return answer;
}