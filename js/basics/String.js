let name = "Aditya"

let Lname = "Mishra"

let gotra = new String("Vats");

// concatination
console.log(name , Lname);
console.log(name + Lname);

// String Interpolation
console.log(`My Name is ${name} ${Lname} and my Gotra is ${gotra}`);

function bazaar(product, price, quantity){
    return `you bought ${quantity} kg of  ${product} in ${price*quantity}`;
}
console.log(bazaar('Chicken',200,1.2));
console.log(bazaar('Mutton',700,2));



// String Concatenation 
function myInfo(fname, lname, country) { 
    return "My name is " + fname + " " + lname + ". " + country + " is my favorite country."; 
               
} 
console.log(myInfo("john", "doe", "India")); 

// String Concatenation  
function myInfo1(fname, lname, country){
    return `My name is ${fname} ${lname}. ${country} is my favorite country`;
}
console.log(myInfo("Aditya", "Mishra", "India")); 


let myMachine = new String("Macbook Air  ");

console.log(myMachine.length);
console.log(myMachine.__proto__);
// let count = 0;
for(let i = 0; i < myMachine.length; i++){
    console.log(myMachine[i]);
    // count++;
    
}
// console.log(count);
console.log(myMachine.toLocaleUpperCase());
console.log(myMachine.toUpperCase());
console.log(myMachine.toLowerCase());

console.log(myMachine.charAt(7));
console.log(myMachine.indexOf('b'));
console.log(myMachine.indexOf('acb'));
console.log(myMachine.indexOf('d')); //it will return -1 since there is no character named d in String


// Slicing
const newString = myMachine.substring(1,7);
console.log(newString)

// we can pass negative value in this method but not in subString  
const AnotherString = myMachine.slice(-4,11)
console.log(myMachine.slice(4));
console.log(AnotherString);

const spaceString = "     Aditya     "
console.log(spaceString);
console.log(spaceString.trim());

// replace
let msg = "Sharda university is top tier university";

console.log(msg.replace("top", "god"));

console.log(msg.replaceAll('u', 'U'));
console.log(msg.replaceAll(msg, msg.toUpperCase()));


// repeat
console.log(myMachine.repeat(5))


// test
// I've provided you with a word variable, set to "skateboard".  Your goal is to use string methods on word, so that you end up with the string "beard". 

const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5,10).replace("board", "beard");

console.log(facialHair)


// array based on splitter such as -, , etc.

let str = "https//:www.Kumar-Aditya-Mishra.com"

// split will return array based on given splitter[ 'Kumar', 'Aditya', 'Mishra.com' ]
console.log(str.split('-'))

// [ 'https//:www', 'Kumar-Aditya-Mishra', 'com' ]
console.log(str.split('.'))


