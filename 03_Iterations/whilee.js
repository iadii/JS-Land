let i = 0
while(i<10){
    console.log(`value of i is ${i}`);
    // i++
    i += 2 //we can increment/ decrement as much as we can
}


// infinite loop because of truthy
// let code = 2
// let debug = 3

// while(code || debug){
//     console.log("Scratch Head");
// }


// array iteration

const myArr = ['superman', 'spiderman', 'batman', 'ironman']

let arr = 0
while(arr < myArr.length){
    console.log(`Value is ${myArr[arr]}`);
    arr++
}

// nested 

let x = 0
while(x<10){
    let y = 0
    while(y<x){
        console.log(`${x} * ${y} = ${x*y}`);
        y++
    }
    x++
}