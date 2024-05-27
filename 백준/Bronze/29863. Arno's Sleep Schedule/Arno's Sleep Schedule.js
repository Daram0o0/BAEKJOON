const [a,b] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let answer = 0;
if(a>=b){
answer = 24-a+b
}
else {
    answer = b-a
}
console.log(answer)