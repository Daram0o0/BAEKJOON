function solution(num_list) {
    var answer = 0;
    var even = 0;
    var odd = 0;
    for(let i = 0; i<num_list.length; i++){
        i%2 ? odd += num_list[i] : even += num_list[i]
    }
    return odd > even ? odd : even;
}