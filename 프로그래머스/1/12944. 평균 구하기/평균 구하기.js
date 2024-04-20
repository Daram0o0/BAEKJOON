function solution(arr) {
   let sum = arr.reduce((p,c)=>p+c,0)
   return sum/arr.length;
}