const marvelHeros = ['IronMan', 'Thor', 'CaptainAmerica', 'Spiderman']

const dcHeros = ["Batman", "Superman", "Flash"]

// it will create nested array and modify original array
// marvelHeros.push(dcHeros)
console.log(marvelHeros); //['IronMan', 'Thor', 'CaptainAmerica', 'Spiderman' , [ 'Batman', 'Superman', 'Flash' ]]

// so to access particular element of nested array we have to do this

// console.log(marvelHeros[4][2]); //Flash

// so we have better option
// it will not modify original array
const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);


// spread operator
// it will spread every element of array and merge it
// in concat we can pass only 1 array in another but in spread we pass as many arrays as we want
const newAllHeros = [...marvelHeros, ...dcHeros]
console.log(newAllHeros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherArray = anotherArray.flat() //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
const real_anotherArray1 = anotherArray.flat(Infinity) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7,  4, 5  ]
console.log(real_anotherArray); 
console.log(real_anotherArray1); 


let arr = [1,2,[3,4,[5,6,7,[8,9],6],11,12]]
console.log(arr.flat(1)); //[ 1, 2, 3, 4, [ 5, 6, 7, [ 8, 9 ], 6 ], 11, 12 ]
console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], 6, 11, 12 ]