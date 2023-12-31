function calculatePrice(num) {
  return num;
}
// console.log(calculatePrice(100,200,300)); //100

// using rest operator
// it will return array
function calculatePrice1(...num) {
  return num;
}
// console.log(calculatePrice1(100,200,300)) //[ 100, 200, 300 ]

// becoz val1 & val2 takes first two argument as parameter and rest will to num as array
function calculatePrice2(val1, val2, ...num) {
  return num;
}
// console.log(calculatePrice2(100,200,300,400,"Adii")) //[ 300, 400, 'Adii' ]

let arr = [100, 200, 300, 400, "Adii"];

function returnSecondIndex(anyArr) {
  return anyArr[2];
}

console.log(returnSecondIndex(arr)); //300

// or

console.log(
  returnSecondIndex([100, 200, "Radhika", 400, "Haritima"]) //Radhika
);
