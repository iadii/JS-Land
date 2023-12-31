let arr = [1,2,3]
let brr = [1,2,3]

// js doesn't care about what's inside of an array so it checks it reference of memory location
// and two different array doesn't share same memory location so false will be answer
console.log(arr === brr);
console.log(arr == brr);

// since we are assigning the reference of arr to nums so it will return true or modify both at same time
let nums = arr
console.log(nums===arr);

console.log(nums);
arr[3] = 4
console.log(nums);

console.log(arr);
nums.pop()
console.log(arr);
