function solution(x1, x2, x3, x4) {
    return compare1(compare(x1, x2), compare(x3, x4));
}

function compare(a, b){
    if(a===true){
        return true;
    }
    else{
        return b === true ? true : false;
    }
}

function compare1(x, y){
    if(x===false){
        return false;
    }
    else{
        return y === false ? false : true;
    }
}