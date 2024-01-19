function solution(my_string) {
return my_string.split("").filter(c => c.match(new RegExp('[0-9]','g'))).map(Number).sort();
}