function solution(arr1, arr2) {
    var len1 = arr1.length;
    var len2 = arr2.length;
    var hap1 = arr1.reduce((a,b)=>{return a+b});
    var hap2 = arr2.reduce((a,b)=>{return a+b});
    
    if(len1 > len2){
        return 1;
    }
    else if(len1 < len2){
        return -1;
    }
    else{
        if(hap1 > hap2){
            return 1;
        }
        else if(hap1 < hap2){
            return -1;
        }
        else{
            return 0;
        }
    }
}