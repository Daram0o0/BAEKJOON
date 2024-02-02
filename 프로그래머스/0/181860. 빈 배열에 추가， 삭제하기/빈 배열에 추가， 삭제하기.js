function solution(arr, flag) {
    let result = [];
    
    flag.forEach((val,idx) =>{
        if(val === true){
            for(let i = 0; i<arr[idx]*2; i++) result.push(arr[idx])
        }
        else{
            for(let i = 0; i<arr[idx]; i++) result.pop()
        }
    })
    return result;
}