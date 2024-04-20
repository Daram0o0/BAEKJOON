function solution(n)
{
    let answer = 0
    n.toString().split("").forEach(val => answer+=(+val))

    return answer;
}