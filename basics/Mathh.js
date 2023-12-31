console.log(Math);

let x = 234.26

console.log(Math.abs(-4524)); //it will give absolute value means if value is -ve then it will convert in +ve.

console.log(Math.round(x)); //it will round off the value means return value without decimal

console.log(Math.ceil(x)); //if given value is x.yyy the it return x+1 value but without decimal. Returns the smallest integer greater than or equal to x

console.log(Math.floor(x)); //if given value is x.yyy the it return only  x value but without decimal. Returns the largest integer less than or equal to x

const ab = (4,27,18,63,17);

console.log(Math.min(ab));
console.log(Math.max(4,27,18,63,17));

console.log(Math.cbrt(27));//cube root

console.log(Math.random());

console.log((Math.random()*10) + 1); //since random returns between 0 and 1 and multiply with 10 to make it 0 to 10 and add with 1 to make it 1 to 11 

console.log(Math.floor(Math.random()*10) + 1); //to make it round


// formula if you want random numbers beetween some custom numbers 
const min = 10;
const max = 20;

// formula
console.log(Math.floor(Math.random()* (max - min + 1) + min)); 

// console.warn("uh-oh")
