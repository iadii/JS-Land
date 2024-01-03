const myNum = [6,7,8,9,10]

// map will return boolean value if value in array checks the condition or not
const newNum = myNum.map((n) => n > 4)
/* 
[
    false, false, false,
    false, true,  true,
    true,  true,  true,
    true
]
*/
// but filter give return the new array with value which is true for given condition
const newNumFilter = myNum.filter((n) => n > 4) //[ 5, 6, 7, 8, 9, 10 ]

const newNum1 = myNum.map((n) => n + 4)

// console.log(newNum);
// console.log(newNumFilter);
// console.log(newNum1);


// chaining methods
const chain = myNum.map((n) => n * 10).map((n) => n + 1)
// first map will return [60,70,80,90,100] to next map and then next map will return according to it's condition

const chain1 = myNum.map((n) => n * 10).map((n) => n + 1).filter((n)=> n > 70)


console.log(chain);