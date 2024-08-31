const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let num = fs.readFileSync(filePath).toString().trim();

for (let i = 0; i < +num; i++) {
  console.log(` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @     `);
}