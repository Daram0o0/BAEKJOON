function solution(n, lost, reserve) {
    var answer = 0;
    let minus = lost.filter(ele => !reserve.includes(ele)).sort((a,b) => a - b)
    let plus = reserve.filter(ele => !lost.includes(ele)).sort((a,b) => a - b)
    
    console.log(minus, plus)
     plus.forEach((val) => {
        let temp = 0;
        if(val === 1) temp = val + 1;
        else if(val === n) temp = val - 1;
        else{
            temp = minus.includes(val - 1) ? val - 1 : val + 1;
        }
        minus = minus.filter(ele => ele !== temp)
         console.log(minus)
    })
    return n - minus.length;
}


// (reverse[0] +- 1)가 lost에 있으면 lost 삭제시키기 
// 총 학생 수 : 5 - lost.length;