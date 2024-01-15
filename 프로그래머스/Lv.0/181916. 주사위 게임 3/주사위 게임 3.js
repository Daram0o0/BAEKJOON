function solution(a, b, c, d) {
    var arr = Array(6).fill(0);
    var answer = 0;
    
    arr[a - 1]++;
    arr[b - 1]++;
    arr[c - 1]++;
    arr[d - 1]++;
    
    if(arr.includes(4)){
        p = arr.indexOf(4) + 1;
        answer = p*1111;
    }
    else if(arr.includes(3)){
        p = arr.indexOf(3) + 1;
        q = arr.indexOf(1) + 1;
        answer = (10*p + q)**2
    }
    else if(arr.includes(2)){
        if(arr.includes(1)){
            p = arr.indexOf(2) + 1;
            q = arr.indexOf(1) + 1;
            r = arr.lastIndexOf(1) + 1;
            answer = q*r
        }
        else{
            p = arr.indexOf(2) + 1;
            q = arr.lastIndexOf(2) + 1;
            answer = (p+q)*Math.abs(p - q)
        }
    }
    else{
        answer = arr.indexOf(1) + 1;
    }
    return answer;
}