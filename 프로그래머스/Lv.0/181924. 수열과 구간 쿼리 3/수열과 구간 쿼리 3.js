function solution(arr, queries) {
    queries.map((query) => {
        var a = query[0];
        var b = query[1];
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp; 
    })
    return arr;
}