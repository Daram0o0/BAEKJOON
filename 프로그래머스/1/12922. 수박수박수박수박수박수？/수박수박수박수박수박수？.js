function solution(n) {
    let watermelon = parseInt(n/2)
    
    return n%2===0 ? "수박".repeat(watermelon) : "수박".repeat(watermelon)+"수";
}