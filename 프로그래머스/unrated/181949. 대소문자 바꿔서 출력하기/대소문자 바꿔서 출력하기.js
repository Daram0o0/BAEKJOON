const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    answer = '';
    for(i of str){
        if(i.match(/[a-z]/g)){
            i = String.fromCharCode(i.charCodeAt() - 32)
        }
        else if(i.match(/[A-Z]/g)){
                i = String.fromCharCode(i.charCodeAt() + 32)
        }
        answer += i
        
    }
    console.log(answer)
});