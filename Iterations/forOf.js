const arr1 = [1,2,3,4,5,6,7]

for (const num of arr1) {
    console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {

    if(greet == " "){
        continue
    }
    console.log(`Each char is ${greet}`);
} 

const myArr = ['superman', 'spiderman', 'batman', 'ironman']

for (const arr of myArr) {
    console.log(arr);
}

// object 
// object is not iteratable 
const obj = {
    'IN' :  "India",
    "UK" :  "United Kingdom",
    "USA" :  "United State of America",
    "Fr" :  "France"
}

for (const item of obj) {

    console.log(item);
    
}