/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
// Method 1 with simple if-else condition:

let num1 = 50;
let num2 = 22;
result = num1 + num2;

if( num1 > num2){ 
    result= 2 * num1;
    console.log(result);
}
else{
    console.log(result);
}

// Method 2 with ternary operator:

let num1 = 50;
let num2 = 22;
result = num1 + num2;

 num1 > num2 ? result= 2 * num1 : result;
console.log(result);