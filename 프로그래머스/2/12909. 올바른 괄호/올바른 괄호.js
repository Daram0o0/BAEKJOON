function solution(s){
    let arr = [];

    [...s].forEach(val =>{
        let num = arr.length - 1;
        if(val == "(") arr.push(val)
        else{
            if(arr[num] == "(") arr.pop()
            else arr.push(val)
        }
        
    })

    return arr.length === 0 ? true : false;
}