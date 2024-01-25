// setting a classList we can use setAttribute()
// but we can face problem while setting multiple classes
/**
 * 

const h2 = document.querySelector('h2');

h2.setAttribute('class', 'purple')

// after setting one more class it will replace older class
h2.setAttribute('class', 'red')

let currentClass = h2.getAttribute('class')
console.log(currentClass);

// setting multiple class we can use backticks

h2.setAttribute('class', `${currentClass} border`)

currentClass = h2.getAttribute('class')

h2.setAttribute('class', `${currentClass} inline`)

 */

// see we can see there are many problems while using setAttribute()
// so we use classList
// `classList` is a way to manipulate and access the classes of an HTML element in JavaScript.
const h2 = document.querySelector('h2');

// it will create like array not exactly array
// adding class seams like pushing element in array
// h2.classList.add('purple')
h2.classList.add('red')


h2.classList.add('border')
h2.classList.add('inline')

// we can add multiple classes too
h2.classList.add('green', 'yl', 'black')

// we can remove classes too like pop()(bit different from pop) from array
h2.classList.remove('red')

// we can remove multiple classes too
h2.classList.remove('yl', 'black', 'green')

// if will either return true or false

console.log(h2.classList.contains('purple')); //true
console.log( h2.classList.contains('red') );//false

// if red is already exist in class then it will remove 
// if it doesn't then it will add
// if it doesn't exists then it will return false
// it it exists then it will return true
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')
h2.classList.toggle('red')