// if every element of array passed the condition(test) then it will return true otherwise false

const myNum =[60,65,89,34,79,98,99]

const passMarks = myNum.every((score) => score >= 60)
console.log(passMarks);

const wordContainer = ['dog', 'cat', 'rat','mat']
console.log(wordContainer.every((count) => count.length <= 3));


// some
// it checks if at least one element of array pass the condition then it will return true otherwise false

const passMarksSome = myNum.some((score) => score >= 60)
console.log(passMarksSome);


// const wordContainer = ['dog', 'cat', 'rat','mat']
console.log(wordContainer.some((count) => count.length >= 4));


const wordContainer1 = ['dog', 'cat', 'rat','mat']
console.log(wordContainer1.some((count) => count.length >= 3));