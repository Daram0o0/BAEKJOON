// function solution(N, stages) {
//     let answer = [];
//     let rate = [];
//     let userNum = stages.length;
// //     실패율 구하기
//     for(let i = 1; i<=N; i++){
//         if(userNum === 0 ) rate.push(0)
//         else{
//                     let failUser = stages.filter(val => val===i).length
//         rate.push(failUser/userNum)
//         userNum -= failUser
//         }

//     }


//     let maxSort = [...rate].sort((a,b)=>a>b?-1:1)
//     // console.log(rate,maxSort)
//     maxSort.forEach(val =>{
//         let index = rate.indexOf(val)+1
//         while(answer.includes(index)){
//             index++
//         }
//         answer.push(index)
//     })
//     return answer;
    
// }

function solution(N, stages) {
    let answer = [];
    let failureRates = [];

    for (let i = 1; i <= N; i++) {
        let totalPlayersOnStage = stages.filter(stage => stage >= i).length;
        let playersFailedOnStage = stages.filter(stage => stage === i).length;
        let failureRate = totalPlayersOnStage === 0 ? 0 : playersFailedOnStage / totalPlayersOnStage;
        failureRates.push({stage: i, rate: failureRate});
    }

    failureRates.sort((a, b) => {
        if (a.rate === b.rate) {
            return a.stage - b.stage;
        }
        return b.rate - a.rate;
    });

    answer = failureRates.map(obj => obj.stage);
    return answer;
}
