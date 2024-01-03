function solution(n, control) {
    var answer = n;
    var str = control.split('');
    for (var i of str) {
        switch (i) {
            case "w":
                answer++;
                continue;
            case "s":
                answer--;
                continue;
            case "d":
                answer += 10;
                continue;
            case "a":
                answer -= 10;
                continue;
            default:
                break;
        }
    }
    return answer;
}