function solution(array, n) {
    return array.map(val => val - n).sort((a,b) => {if(Math.abs(a) === Math.abs(b)) return a - b
                                                    else return Math.abs(a) - Math.abs(b)
                                                   })[0]+n;
}