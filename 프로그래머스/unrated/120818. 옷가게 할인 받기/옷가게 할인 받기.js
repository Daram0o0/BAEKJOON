function solution(price) {
    var answer = 0;
    var discount = 0;
    
    if (price>=100000){
        discount = 5;
       if (price>=300000){
            discount = 10; 
            if (price>=500000){
                  discount = 20;  
    }
    } 
   
    }         
    

    
    answer = price * (100 - discount) / 100
    return Math.floor(answer);
}