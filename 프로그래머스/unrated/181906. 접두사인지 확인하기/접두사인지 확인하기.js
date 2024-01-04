function solution(my_string, is_prefix) {
    let num = is_prefix.length;
    
    return my_string.slice(0, num) === is_prefix ? 1 : 0;
}