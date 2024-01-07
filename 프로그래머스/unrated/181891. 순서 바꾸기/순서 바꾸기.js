function solution(num_list, n) {
    var answer = [];
    var i = 0;
    while(n--){
        num_list.push(num_list[i]);
        num_list.shift();
    }
    return num_list;
}