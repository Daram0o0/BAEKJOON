function solution(spell, dic) {
    // var answer = 0;
    for(let i of dic){
        var count = 0;
        for(let j of spell){
            if(i.includes(j)){
                count++;
            }
        }
        if(count === spell.length) return 1;
    }
    return 2;
}