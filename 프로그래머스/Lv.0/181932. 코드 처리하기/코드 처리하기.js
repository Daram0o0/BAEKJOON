function solution(code) {
    var ret = '';
    var mode = false;
    
    for(let i = 0; i<code.length; i++){
        if(code[i]==="1"){
            mode = !mode;
        }
        else{
            if(!mode){
                if(i%2===0){
                    ret += code[i]
                }
        }   
        else if(mode){
            if(i%2){
                ret += code[i]
            }
        }
        }
    }
    
    return ret === '' ? "EMPTY" : ret;
}