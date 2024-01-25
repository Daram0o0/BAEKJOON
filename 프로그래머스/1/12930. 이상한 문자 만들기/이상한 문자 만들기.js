function solution(s) {
    let arr = [];
    s.split(" ").map((str) =>{
        let answer = '';
        for(let i = 0; i<str.length; i++){
            if(i%2===0) answer += str[i].toUpperCase()
            else answer += str[i].toLowerCase()
        }
        arr.push(answer)
    })
    return arr.join(" ");
}