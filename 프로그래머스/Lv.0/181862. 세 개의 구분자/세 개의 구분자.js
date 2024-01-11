function solution(myStr) {  
    var arr = myStr.split(/[a-c]/g).filter(e => e!=="");
    if(arr.length === 0) arr = ["EMPTY"]
    return arr;
}