function solution(board) {
    let answer = 0;
    let danger = [
        [-1,0],
        [-1,-1],
        [0,-1],
        [1,-1],
        [1,0],
        [1,1],
        [0,1],
        [-1,1]
    ]
    
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[0].length; j++){
            if(board[i][j] === 1){
                danger.forEach((val) => {
                    let [x, y] = val;
                    [x, y] = [x+i, y+j];
                    
                    if(x>=0 && x<board.length && y>=0 && y<board[0].length && board[x][y] === 0){
                        board[x][y] = 2;
                    }
                })
            }
        }
    }
    
    board.forEach(a => a.forEach(b => b === 0 ? answer++ : answer))
    return answer;
}