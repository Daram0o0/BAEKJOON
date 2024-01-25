function solution(numlist, n) {
//     [1,2,3,4,5,6]
//     [-3,-2,-1,0,1,2]
//     [0,1,-1,2,-2,3]
//     [4,5,3,6,2,1]
    return numlist.sort((a, b) => {
        const [aGab, bGab] = [Math.abs(a-n),Math.abs(b-n)];
        
        if(aGab === bGab) return b - a
        return aGab - bGab
    })
}