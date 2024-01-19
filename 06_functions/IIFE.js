// Immediately Invoked Function Expression (IIFE)

// to remove the pollution from global scope we use IIFE

// Synatx = (function Definition)(function execution) \
// ()()
// we must terminate the IIFE with ; otherwise it will give error 

// named iife means function with name
// simple iife means arow function without name

(function hey(){
    console.log(`hey there`)
}) ();

// function with argument
(function hey(name){
    console.log(`Hey ${name}`);
})('Adii');

// arrow function 

( () => {
    console.log(`Hey you have to study more`)
}) ();

// arrow function can be nameless or with name too

( adii = () => {
    console.log(`Hey you have to study more`)
})();

// arrow function with argument

( (name) => {
    console.log(`Hey ${name} you have to study more`)
}) ('Adii');



const a = (arg = (num1 , num2) => {
    return num1 + num2
})(5,6)

console.log(a);
