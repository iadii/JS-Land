// = () => {}

const addTwo = (num1, num2) => {

    return num1 + num2
}

console.log(addTwo(3, 4));

// implicit return 

const addTwos = (num1 , num2) => num1 + num2 

console.log(addTwos(5,6));

// another way of implicit return
// either we can wrap in small braces or not both are same 
const mulTwo = (n1, n2) => (n1 * n2)

console.log(mulTwo(26, 88));


// returning object
// if we don't provide object under small braces then it will return undefined
const retObj = () => ({author : "Aditya"})
console.log(retObj());