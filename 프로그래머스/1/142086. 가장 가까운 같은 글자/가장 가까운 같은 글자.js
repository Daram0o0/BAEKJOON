function solution(s) {
    var result = [];
    let arr = [];
    s.split("").forEach((v,i) => {
        result.push(arr.lastIndexOf(v)===-1 ? arr.lastIndexOf(v) : i - arr.lastIndexOf(v))
        arr.push(v)
    })
    return result;
}