function solution(myString) {
    return myString.split("x").filter((e)=>{return e !== ""}).sort();
}