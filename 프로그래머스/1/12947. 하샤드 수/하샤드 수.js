function solution(x) {
    let newNum = (x+"").split("").reduce((p,c)=>p+(+c),0)
    return x%newNum===0;
}