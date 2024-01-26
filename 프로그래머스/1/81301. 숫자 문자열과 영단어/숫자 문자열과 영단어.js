function solution(s) {
    const number = ["zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"]
    
    let str = s;
    
    while(!+str){
        number.map((val,idx) => str = str.replace(val, idx))
    }
    return +str;
}