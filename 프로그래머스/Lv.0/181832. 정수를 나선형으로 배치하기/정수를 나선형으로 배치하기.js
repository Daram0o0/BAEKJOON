function solution(n) {
    var answer = Array.from(Array(n),()=>Array(n));
    
    let num = 1;
    let startRow = 0;
    let startCol = 0;
    let endRow = n - 1;
    let endCol = n - 1;
    
    while(startRow <= endRow && startCol <= endCol){
        for(let i = startCol; i<=endCol; i++){
            answer[startRow][i] = num++;
        }
        startRow++;
        for(let i = startRow; i<=endRow; i++){
            answer[i][endCol] = num++;
        }
        endCol--;
        for(let i = endCol; i >= startCol; i--){
            answer[endRow][i] = num++;
        }
        endRow--;
        for(let i = endRow; i >= startRow; i--){
            answer[i][startCol] = num++;
        }
        startCol++;
    }
    return answer;
}