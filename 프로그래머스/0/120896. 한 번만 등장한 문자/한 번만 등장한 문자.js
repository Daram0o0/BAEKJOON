function solution(s) {
    let arr = Array(26).fill(0);
    let result = ""
    
    s.split("").forEach(val => arr[val.charCodeAt() - 97]++)
    
    console.log(arr)
    arr.forEach((val,idx) => {if(val === 1) result += String.fromCharCode(idx + 97)})
    return result
}