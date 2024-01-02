// Syntax
// arr.forEach(item, index, array)


const coding = ['js', 'rb', 'java', 'py' , 'js', 'cpp']

// call back functions doesn't have name
// it is better to use arrow function
coding.forEach(function(val){
    console.log(val);
})

// arrow function
coding.forEach((val) => {
    console.log(val);
})


// another way

function printME(item){
    // console.log(item);
}
coding.forEach(printME)

const prin = (item) => {
    // console.log(item);

}
coding.forEach(prin)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr); 
    // js 0 [ 'js', 'rb', 'java', 'py', 'js', 'cpp' ] 
})