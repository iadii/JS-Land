// empty array
let arr1 = []
// type of array is Object
console.log(typeof arr1);

//heterogeneous Array
let aArray = ["Adi", "Raki", "Arun", "Mishra",1,3,4,false,true,NaN, undefined]

// Array with give Size but giving size is useless becoz it is resizable we can  also do let arr = new Array() without size
let arr = new Array(2)
arr[0] = 1
arr[1] = 3
arr[2] = 3
arr[3] = 3
arr[4] = 3
console.log(arr);

let numbers = new Array(1, 2, 3, 4, 5, "Adii");
console.log(numbers);

// Array.from to make it iterable 
let newArray = Array.from([2,4,"ad"]);
console.log(newArray);

// Array.from to make it iterable and performing some function
let squares = Array.from([1, 2, 3, 4], x => x * x);
console.log(squares);


console.log(newArray.length);


const sc1 = 100
const sc2 = 200
const sc3 = 300
const sc4 = 400

console.log(Array.of(sc1,sc2,sc3,sc4));