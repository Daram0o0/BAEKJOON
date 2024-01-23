function solution(age) {
    let str = "abcdefghij"; //0~9
    return Array.from(age.toString()).map(val => str[+val]).join('')
}