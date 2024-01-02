const coding = ['js', 'rb', 'java', 'py' , 'js', 'cpp']

// it will return undefined. 
// It does not return a new array or modify the existing array.
const val = coding.forEach( (item) => {
    // console.log(item);
    return item;
})
console.log(val); //undefined 

// for returning the value we use filter method

const nums = [1,2,3,4,5,6,7,8,9,10]
// it will return the array of nums which is greater than 4 
// and store it in other variable called newNum

const newNum = nums.filter( (n) => n > 4)
console.log(newNum); //[ 5, 6, 7, 8, 9, 10 ]

// if we are using curly braces in arrow function then we have to explicitly return, otherwise no need(upper example)
const newNum1 = nums.filter( (n) => {
    return n < 6
})
console.log(newNum1); //[ 1, 2, 3, 4, 5 ]


// if we want to filter out the array with forEach then we have to do this
//  