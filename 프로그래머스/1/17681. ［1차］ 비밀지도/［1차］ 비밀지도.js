function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i<arr1.length; i++){
        let map = "";
        
        let a1 = Number(arr1[i]).toString(2);
        let a2 = Number(arr2[i]).toString(2);
        
        while(a1.length < n) a1 = "0"+a1;
        while(a2.length < n) a2 = "0"+a2;
        
        let str = (+a1 + +a2).toString()
        
        while(str.length < n) str = "0"+str;
        
        str.split("").map((val) => val === '0' ? map += " " : map+="#")
        
        answer.push(map)
    }
    
    // console.log((Number(Number(22).toString(2)) + Number(Number(14).toString(2))).toString().split(""))
    return answer;
}