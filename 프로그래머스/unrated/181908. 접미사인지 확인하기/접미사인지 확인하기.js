function solution(my_string, is_suffix) {

    let num = is_suffix.length;

    return my_string.slice(-num)=== is_suffix ? 1 : 0;   

}