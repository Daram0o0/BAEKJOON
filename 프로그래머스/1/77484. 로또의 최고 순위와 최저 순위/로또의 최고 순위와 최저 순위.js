function solution(lottos, win_nums) {
    const rank = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    var answer = 0;
    let zero = lottos.filter(item => item === 0).length;
    lottos.map((val) => {
        win_nums.map((_val) => {
            if(val === _val) answer++;
        })
    })

    return [rank[answer+zero],rank[answer]]
}
// 최대 최소 값 : lottos 0 갯수 + 일치하는 값