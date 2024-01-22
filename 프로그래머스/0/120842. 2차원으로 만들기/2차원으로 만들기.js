function solution(num_list, n) {
    let arr = Array.from(Array(num_list.length/n),()=>Array(n));
    let num = 0;
    
//     row : 가로
    for(let i = 0; i<num_list.length/n; i++){
//         col : 세로
        for(let j = 0; j<n; j++){
            arr[i][j] = num_list[num++];
        }
    }
    return arr;
}