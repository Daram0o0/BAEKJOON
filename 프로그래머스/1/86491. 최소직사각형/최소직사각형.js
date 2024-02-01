function solution(sizes) {
    var answer = 0;
    let rows = [];
    let cols = [];
    
    sizes.forEach(val => {
        if(val[0] < val[1]){
            rows.push(val[1])
        cols.push(val[0])
        }
        else{
            rows.push(val[0])
        cols.push(val[1])
        }
    })
    
    rows.sort((a,b) => b - a)
    cols.sort((a,b) => b - a)
    return rows[0] * cols[0];
}