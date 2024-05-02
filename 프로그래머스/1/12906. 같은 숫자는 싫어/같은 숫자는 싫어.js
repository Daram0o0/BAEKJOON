function solution(arr)
{
    const myArr = []
    arr.forEach((val,idx)=>{
        if(idx ===0)myArr.push(val)
        else{
            if(myArr[myArr.length-1]!==val) myArr.push(val)
        }
    })
    return myArr
}