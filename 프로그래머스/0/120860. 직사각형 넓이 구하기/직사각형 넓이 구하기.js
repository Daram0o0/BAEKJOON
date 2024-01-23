function solution(dots) {
    let arr = dots.sort((a,b)=>{
        if(a[0]===b[0]){
            return a[1] - b[1]
        }
        else{
            return a[0] - b[0]
        }                   
    });
    let row = arr[3][0] - arr[0][0];
    let col = arr[1][1] - arr[0][1];
    
    return row*col
}