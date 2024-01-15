function solution(arr) {
    var row = arr[0].length //행, 가로
    var col = arr.length //열, 세로
    
    if(row < col){
        for(let i = 0; i<col; i++){
            for(let j = row; j<col; j++){
                arr[i].push(0)
            }
        }
    }
    else if(row > col){
        for(let i = col; i<row; i++){
            arr.push(Array(row).fill(0))
        }
    }
    
    return arr;
}