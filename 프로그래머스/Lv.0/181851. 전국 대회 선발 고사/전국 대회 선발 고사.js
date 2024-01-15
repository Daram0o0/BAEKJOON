function solution(rank, attendance) {
    var answer = 0;
    var a = -1;
    var b = -1;
    var c = -1;
    
    for(let i = 0; i<rank.length; i++){
        if(attendance[rank.indexOf(i+1)]){
            console.log(rank.indexOf(i+1), a)
            if(a === -1){
                a = rank.indexOf(i+1)
            }
            else if(b === -1){
                b = rank.indexOf(i+1)
            }
            else if(c === -1){
                c = rank.indexOf(i+1)
            }
        }
    }
    return a*10000 + b*100 + c;
}