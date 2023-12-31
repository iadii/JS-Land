var a = 5
var b = NaN

// it will return number becoz NaN is also considered as number in js
console.log(typeof(a+b));

// it will return NaN becoz any operation with NaN will return NaN
console.log(a+b);
var c = 200 + 0/0
console.log(c);

let i = 0
// it will print 0 since it is postfix operator. consol.log will print i then it will get increment
console.log(i++); 

let j = 0
// it will print 1 because it is prefix operator. first it will get increment then consol.log will print the value
console.log(++j);



let numPuppies = 30
console.log(numPuppies);

// changing number to boolean, since it is not a type strict so it can be changed in this
numPuppies = false
console.log(numPuppies);

// changing back to a Number
numPuppies = 100;
console.log(numPuppies);

console.log(typeof undefined);
console.log(typeof null);



// type conversion

let num = ""
console.log(typeof num);

// string to Number
let valueInInt = Number(num)
console.log(typeof valueInInt);

// Number to String
let valueInString = String(valueInInt)
console.log(typeof valueInString);

let name = "Aditya"
let nameNum = Number(name)

// since string cannot be a number so it will return NaN
console.log(nameNum);

// Since NaN is also a Type of Number 
console.log(typeof nameNum);

// boolean type conversion to Number
let isBool = false
let isBoolNum = Number(isBool)
console.log(typeof isBoolNum)
console.log(isBoolNum)

// Number to boolean type conversion
let isNum = 1
let isNumBool = Boolean(isNum)
console.log(typeof isNumBool);
console.log(isNumBool);


// it will return 1 becoz type conversion true will become Number
console.log(+true);

// it will return 0 becoz type conversion and empty string represent false
console.log(+"");