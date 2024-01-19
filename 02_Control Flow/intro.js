const temp = 41;

if (temp <= 50) {
  console.log("Executed");
} else {
  console.log("Not Executed");
}

// will not work
// you directly can't check the value with datatype
// if(temp <= Number){
//     console.log("Executed");

// }
// else{
//     console.log("Not Executed");
// } //Not Executed


const user = Math.floor(Math.random() * 100) + 1;
console.log(user);

if (user < 10) {
  const superPower = "see Though";
  console.log(`User has ${superPower}`);
} else if (user >= 10 && user < 20) {
  const superPower = "Laser Eye";
  console.log(`User has ${superPower}`);
} else if (user >= 20 && user < 30) {
  const superPower = "Run Fast";
  console.log(`User has ${superPower}`);
} else if (user >= 40 && user < 50) {
  const superPower = "Fly";
  console.log(`User has ${superPower}`);
} else if (user >= 50 && user < 60) {
  const superPower = "Money and Brain like Iron Man";
  console.log(`User has ${superPower}`);
} else if (user >= 60 && user < 70) {
  const superPower = "Spider Web";
  console.log(`User has ${superPower}`);
} else if (user >= 70 && user < 80) {
  const superPower = "Super Strength like Captain America ";
  console.log(`User has ${superPower}`);
} else if (user >= 80 && user < 90) {
  const superPower = "God Power like Thor";
  console.log(`User has ${superPower}`);
} else if (user >= 90) {
  const superPower = "Super man";
  var hero = "super man 2";
  console.log(`User is ${superPower}`);
}

// console.log(`User is ${superPower}`); //it will give error because superpower declared in if scope
// console.log(`User is ${hero}`); //it will not give error because var gets leaked

// Shorthand
// implicit scope

const balance = 100;

if (balance > 500) console.log("grab ps5");
// we can use comma for multiple but it is not professional to use it
else console.log("Study hard and earn hard"), console.log("test");





const debitCard = true
const userLoggedIn = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

// And statement
// if any of these three condition gets false then code scope will not get execute
//  1 && 0 = 0
if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to Enter the site");
}

// OR statement
// if any of these two conditions gets true then scope will get executed 
// 1 || 0 = 1
if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("Allow to Enter the site");
}

// Nullish coalescing operator (??) : null undefined 

// in this first value get assigned to a operator if there is not null and undefined

let val1 = 5 ?? 10 //5

let val2 = null ?? 10 //10
let val3 = null ?? undefined //undefined
let val4 = undefined ?? null //null

let val5 = undefined ?? 15 ?? 26 //15
let val6 = null ?? 15 ?? 26 //15


console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);


// Ternary operator
// condition ? true :false 

let iceTea = 88

iceTea <= 80 ? console.log("Price is good") : console.log("Ice Tea is expensive");