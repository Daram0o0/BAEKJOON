function solution(my_string, s, e) {
    var str1 = my_string.slice(0,s)
    var str2 = my_string.slice(s,e+1).split("").reverse().join("")
    var str3 = my_string.slice(e+1,my_string.length)
    return str1+str2+str3;
}