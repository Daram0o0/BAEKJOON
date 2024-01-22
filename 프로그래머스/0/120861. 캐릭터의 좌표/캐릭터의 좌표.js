function solution(keyinput, board) {
    var answer = Array.from(Array(board[0]), ()=>Array(board[1])).fill(0);
    let startRow = 0;
    let startCol = 0;
    let rowMax = Math.floor(board[0]/2);
    let colMax = Math.floor(board[1]/2);
    
    keyinput.map((val) => {
        switch(val){
             case "left":
                startRow === -rowMax ? startRow : startRow--;
                break;
            case "right":
                startRow === rowMax ? startRow : startRow++;
                break;
            case "up":
                startCol === colMax ? startCol : startCol++;
                break;
            case "down":
                startCol === -colMax ? startCol : startCol--;
                break;   
        }   
    })
    
    return [startRow,startCol];
}