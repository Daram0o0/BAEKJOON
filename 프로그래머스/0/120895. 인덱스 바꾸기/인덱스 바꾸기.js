function solution(my_string, num1, num2) {
    let arr = [...my_string];
    // [arr[num1],arr[num2]] = [arr[num2], arr[num1]]
    // return arr.join('');
    
     return arr.map((v, i) => {
        if(i === num1) return arr[num2];
        if(i === num2) return arr[num1];
        return v;
    }).join('')

}