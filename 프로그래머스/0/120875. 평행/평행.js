function solution(dots) {
    let ans = 0;
    
    function calc(a,b,c,d){
        let abDiff, cdDiff;
        abDiff = (a[1] - b[1]) / (a[0] - b[0])
        cdDiff = (c[1] - d[1]) / (c[0] - d[0])
        
        abDiff === cdDiff ? ans++ : ans;
    }
    
    calc(dots[0],dots[1],dots[2],dots[3])
    calc(dots[0],dots[2],dots[1],dots[3])
    calc(dots[0],dots[3],dots[1],dots[2])
    
    return ans>0 ? 1 : 0;
}