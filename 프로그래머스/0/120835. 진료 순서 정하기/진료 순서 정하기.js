function solution(emergency) {
    let arr = emergency.slice().sort((a, b) => b - a);
    console.log(arr, emergency)
//       emergency : [3, 76, 24]
//     arr : [76, 24, 3] => 인덱스 
    // console.log(answer, answer.slice())
    return emergency.map(val => arr.indexOf(val) + 1);
}