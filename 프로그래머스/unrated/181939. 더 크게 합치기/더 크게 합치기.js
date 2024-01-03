function solution(a, b) {
    var answer = 0;
    var str1 = a.toString();
    var str2 = b.toString();
    str = Number(str1 + str2) > Number(str2 + str1) ? Number(str1 + str2) :Number(str2 + str1);
    answer = Number(str);
    
    return str;
}