function solution(arr, delete_list) {
    var answer = arr;
    for(let i of arr){
        for(let j of delete_list){
            if(i === j){
                // console.log(arr)
                answer = answer.filter((e) => {return e!== j})
            }
        }
    }
    return answer;
}