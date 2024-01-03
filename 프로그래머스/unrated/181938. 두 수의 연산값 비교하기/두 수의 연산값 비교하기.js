function solution(a, b) {
    var str1 = Number(a.toString()+b.toString());
    var str2 = 2*a*b;
    
    return str1 >= str2 ? str1 : str2;
}