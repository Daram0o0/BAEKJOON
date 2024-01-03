function solution(num_list) {
    var gop = num_list.reduce((a,b)=>{return a*b})
    var hap = num_list.reduce((a,b)=>{return a+b})
    return gop < hap**2 ? 1 : 0; 
}