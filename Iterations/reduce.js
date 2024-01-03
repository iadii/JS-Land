// array.reduce(function(){}, initialValue)

const myNum =[1,2,3]

const myTotal = myNum.reduce(function (acc, currVal){
    // console.log(`Accumulator is ${acc} and Current Value is ${currVal}`);
    return acc + currVal
}, 0)

// console.log(myTotal);

const myTotal1 = myNum.reduce(function (acc, currVal){
    // console.log(`Accumulator is ${acc} and Current Value is ${currVal}`);
    return acc * currVal
}, 1)

const myTotal2 = myNum.reduce((acc, currVal) => currVal + acc, 2)
console.log(myTotal2); //8


const myTotal3 = myNum.reduce((acc, currVal) => {
    console.log(`Accumulator is ${acc} and Current Value is ${currVal}`);
    return currVal - acc
}, 2)
/*Accumulator is 2 and Current Value is 1
Accumulator is -1 and Current Value is 2
Accumulator is 3 and Current Value is 3
so 0
*/