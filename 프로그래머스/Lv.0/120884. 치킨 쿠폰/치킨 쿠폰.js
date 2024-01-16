function solution(chicken) {
    let result = 0;
    let cp = chicken;
    let service = 0;
    
    while(cp/10 >= 1){
        service += Math.floor(cp/10)
        console.log(service,cp)
        cp = Math.floor(cp/10) + cp%10
        console.log(service,cp)
    }
    return service;
}