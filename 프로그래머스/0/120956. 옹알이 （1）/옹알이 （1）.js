function solution(babbling) {
    let arr = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    let baArr = babbling.map((v) => {arr.map((c) => {v = v.replace(c,'f')}); return v;});
    
    baArr = baArr.map(v => v.replaceAll('f',''))
    
    baArr.map(v => v === "" ? count++ : count)
    return count;
}