/* Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101 */

// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        
        count = count + arr[i]
    }
    console.log(count)
    return count
}
sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1])