function solution(s) {
    console.log(s.length)
    if(s.length !== 4 && s.length !== 6 ) return false;
    return s.match(/[0-9]/g).length === s.length ? true : false;
}