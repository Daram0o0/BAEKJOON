function solution(s) {
    let len = s.length;
    let mid = Math.ceil(len/2) - 1;
    
    return len%2 ? s[mid] : s.substr(mid,2)
}