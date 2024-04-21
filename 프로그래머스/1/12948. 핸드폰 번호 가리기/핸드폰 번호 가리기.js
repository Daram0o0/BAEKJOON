function solution(phone_number) {
    let len = phone_number.length - 4
    let answer = "*".repeat(len) + phone_number.substr(len,4)
    return answer;
}