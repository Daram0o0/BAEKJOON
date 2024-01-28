// function solution(s) {
//     let arr = s.split(" ");
//     let result = [];
    
//     for(let i = 0; i<arr.length; i++){
//         let str = arr[i][0].match(/[0-9]/g) ? arr[i][0] : arr[i][0].toUpperCase();
        
//         for(let j = 1; j<arr[i].length; j++){
//             str += arr[i][j].toLowerCase();
//         }
        
//         result.push(str);
//     }
    
//     return result.join(" ")
function solution(s) {
    return s.split(" ").map(value => value.split("").map((_value, index) => index===0 ? _value.toUpperCase() : _value.toLowerCase()).join("")
    ).join(" ");
}