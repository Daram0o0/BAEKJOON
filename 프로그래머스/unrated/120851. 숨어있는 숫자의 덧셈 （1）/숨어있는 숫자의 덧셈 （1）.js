function solution(my_string) {
    var str = [];
    str = my_string.split('').map(Number).filter(Boolean)
    return str.reduce((a,b)=>a+b);
}