function solution(s) {
    var answer = true;
    if (s.length !== 4 && s.length !== 6) return false;
    for (let i = 0; i < s.length; i++) {
        if (isNaN(parseInt(s.charAt(i)))) return false;
    }
    return answer;
}
