function solution(s){
    let p = 0
    let y = 0
    s.toLowerCase().split("").forEach(val =>{
        if(val === 'y') y++
        else if(val ==='p') p++
    })
   return p===y
}