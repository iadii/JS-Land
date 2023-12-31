// Hoisting => when we call the function before the declaration of function

// normal function can be hoist
console.log(addOne(5));
function addOne(num){

    return num + 1
}

// when function assigned to variable then it can't be hoist
// addTwo(5) //it will throw error
const addTwo = function(num){

    return num + 2
}