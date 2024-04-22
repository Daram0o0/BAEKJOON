function solution(s, n) {
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upper = lower.map(val => val.toUpperCase())

let result = ""
    s.split("").forEach((val) => {
        n = n%26
        let num = val.charCodeAt();
        
        if(num>=97){
            let newNum = (num-97+n)%26
            result += lower[newNum]
        }
        else if(num>=65){
            let newNum = (num-65+n)%26
            result += upper[newNum]
        }
        else result += " "
    })

    return result;
}