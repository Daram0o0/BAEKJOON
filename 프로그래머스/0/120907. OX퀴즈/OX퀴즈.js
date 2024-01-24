// function solution(quiz) {
//     let arr = [];
//     let bool = 1;
//     let answer = [];
    
//     quiz.map((val) => {
//         let [calc, res] = val.split(" = ");
//         bool = calc.includes("+") ? 1 : -1
//         arr = bool === 1 ? calc.split(" + ") : +calc.split(" - ")
//         let calcNum = arr.reduce((a, c) => +a + (+c * bool), 0);
//         calcNum === +res ? answer.push("O") : answer.push("X")
//     })
//     return answer;
// }

function solution(quiz) {
    let answer = [];

    quiz.map((val) => {
        let [calc, res] = val.split(" = ");
        let bool = calc.includes("+") ? 1 : -1;
        let arr = bool === 1 ? calc.split(" + ") : calc.split(" - ");

        let calcNum = +arr[0] + +arr[1]*bool

        calcNum == +res ? answer.push("O") : answer.push("X");
    });

    return answer;
}
