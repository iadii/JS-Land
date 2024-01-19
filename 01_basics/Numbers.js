const score = 400
console.log(score);

let num = new Number(100);
console.log(num);
console.log(num.toFixed(2));

console.log(Math.PI.toFixed(6));

const otherNumber1 = 23.98678 //24 
const otherNumber2 = 23.38678 
const otherNumber3 = 123.98678 //124 becoz parameter is 3 and digit is already 3 but after point digit is greater than 5 so 124
const otherNumber4 = 123.367576 //123 becoz parameter is 3 and digit is already 3 but after point digit is less than 5 so 123

// it will round of the value in digits based on parameter. priority is before decimal
console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(3));
console.log(otherNumber3.toPrecision(3));
console.log(otherNumber4.toPrecision(3));


const hund = 1000000

console.log(hund.toLocaleString());
console.log(hund.toLocaleString('en-IN'));
  