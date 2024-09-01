var x =10;
var y =2.9;
var divide= x/y;

// to check data type
console.log(typeof divide);  

// to limit decimal digit
var value = divide.toFixed(3);

console.log(typeof value);
console.log(5 + value);
//  here Addition output is 53.448 because value becomes string

console.log(5 + parseFloat(value));
// parseFloat is used to convert string value in to decimal number value.
var x = 4;
console.log(x **2)

// here double ** is work as square or cube / power value
var x = 5;
console.log(x **3)

// Modoulous operation
console.log(10 % 8)
console.log(8 % 10)

