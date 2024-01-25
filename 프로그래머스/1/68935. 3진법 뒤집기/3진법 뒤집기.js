function solution(n) {
    let reverse = n.toString(3).split("").reverse().join("")
    let ten = parseInt(reverse, 3)
    return ten;
}