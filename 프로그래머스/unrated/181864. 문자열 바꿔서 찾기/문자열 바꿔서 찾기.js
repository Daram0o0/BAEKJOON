function solution(myString, pat) {
    var answer = 0;
    var newString = "";
    for(let i of myString){
        i === "A" ? newString += "B" : newString += "A";
    }
    return newString.indexOf(pat)===-1 ? 0 : 1;
}