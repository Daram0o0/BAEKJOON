function solution(my_string) {
    let result = 0;
    let bool = 0;
    let arr =  my_string.split(" ")
    for(let i = 0; i<arr.length; i++){
        if(i%2===0){
            bool === 0 ? result += +arr[i] : result -= +arr[i]
        }
        else{
            arr[i] === "+" ? bool = 0 : bool = 1
        }
        
    }
    return result;
}