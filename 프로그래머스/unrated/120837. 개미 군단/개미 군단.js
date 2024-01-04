function solution(hp) {
    var answer = 1000;
    let g = 5;
    let b = 3;
    let i = 1;
    
    for(let inum = 0; inum <= parseInt(hp/i); inum++){
        for(let bnum = 0; bnum <= parseInt(hp/b); bnum++){
            for(let gnum = 0; gnum <= parseInt(hp/g); gnum++){
                if(hp === g*gnum + b*bnum + i*inum){
                    answer > (gnum + bnum + inum) ? answer = (gnum + bnum + inum) : answer;
                }
                    
            }
        }
    }
    
    return answer;

}