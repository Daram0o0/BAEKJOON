function solution(s) {
    let size = s.length;
    let mid = Math.ceil(size/2) - 1;
    
    return size%2 ? s[mid] : s.slice(mid,mid+2)
}