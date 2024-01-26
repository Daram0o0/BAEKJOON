function solution(array, commands) {
    var answer = [];
    commands.map((command) => {
        let start = command[0] - 1;
        let end = command[1];
        let find = command[2] - 1;
        
        answer.push(array.slice(start, end).sort((a, b) => a - b)[find])
    })
    return answer;
}