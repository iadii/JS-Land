// let arr = ["rad", 'bluu',"black"]
// console.log(arr);

let arr = [1,2,3,4]

// it will push the element to last of array or add element to last of array
// you have to pass the value as argument
arr.push(5) // [ 1, 2, 3, 4, 5 ]
arr.push(6) // [ 1, 2, 3, 4, 5 ,6]
arr.push(7) // [ 1, 2, 3, 4, 5 ,6, 7]

// it will pop or delete the last element of array
// no need of giving argument
arr.pop() // [ 1, 2, 3, 4, 5 ,6]
arr.pop() // [ 1, 2, 3, 4, 5]

// it will add the element at the zero'th index of array or start of array.
arr.unshift(0) // [0, 1, 2, 3, 4, 5 ]
arr.unshift(9) // [9, 0, 1, 2, 3, 4, 5 ]

arr.unshift(8) // [8, 9, 0, 1, 2, 3, 4, 5 ]



// it will delete the element of Zero'th index
arr.shift() //[ 9, 0, 1, 2, 3, 4, 5 ]
arr.shift() //[ 0, 1, 2, 3, 4, 5 ]
arr.shift()
console.log(arr);


console.log(arr.includes(9));
console.log(arr.includes(3));

console.log(arr.indexOf(4));


// join() will convert array into String
const newArr = arr.join()

console.log(arr); //[ 1, 2, 3, 4, 5 ]
console.log(newArr); // 1,2,3,4,5
console.log(typeof newArr); //string


// Slice
// Takes two optional parameters: start and end
// Does not modify the original array.
let n = [2,3,4,5,6,7]
console.log("A ",n);

let n1 = n.slice(1,4)
console.log("Sliced",n1);
console.log("B ",n);


//Splice 
// Takes three or more parameters: start, deleteCount, and optional items to add
// Modifies the original array by removing or adding elements.
let n2 = n.splice(1,4)
console.log("Spliced",n2);
console.log("C", n);

// another type of using splice
let fruits = ["apple", "orange", "banana", "kiwi"];
let deletedFruits = fruits.splice(1, 2, "grape", "pear");



// Concatinating
// it will not update original array

let ar = ['a','b','c']
let br = ['d', 'e', 'f']

// let cr = ar.concat(br)

console.log(ar.concat(br));

// indexOf

console.log(ar.indexOf('c'));


// reverse
// it will modify(reverse) the original array
let a = [1,2,3,4,5,6,7,8,9]
console.log(a);

a.reverse()
console.log(a);

// empty element index of array
let color = ["red", "orange", "yellow"]
console.log(color);

console.log(color.length);

color[10] = 'indigo'

console.log(color); //[ 'red', 'orange', 'yellow', <7 empty items>, 'indigo' ]
console.log(color.length);

color[6] = 'purple';

console.log(color.length);
console.log(color);
// [
//     'red',
//     'orange',
//     'yellow',
//     <3 empty items>,
//     'purple',
//     <3 empty items>,
//     'indigo'
// ]