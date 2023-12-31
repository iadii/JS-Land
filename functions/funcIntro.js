function hello() {
  console.log("Hello JS user");
}
// hello()

// without return
// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// }

// with return
// function addTwoNums(num1, num2){
//     return num3 = num1 + num2
// }

function addTwoNums(num1, num2) {
  return num1 + num2;
}

// console.log(addTwoNums(3,4));

const result = addTwoNums(5, 9);
// console.log(result);

// function isLoggedIn (username) {
//     if(username !== undefined){

//         return `${username} just Logged In`
//     }
//     else{
//         console.log('please enter a valid username');
//         return
//     }

// }

// we can overwrite the username but default value is Adii so it doesnot go in false block
function isLoggedIn1(username = "Adii") {
  if (!username) {
    // negative of false(empty argument) is True 
    console.log("please enter a valid username");
    return;
  } else {
    return `${username} fell for me`;
  }
}

console.log(isLoggedIn1("Haritima "));

function isLoggedIn(username) {
  if (!username) {
    console.log("please enter a valid username");
    return;
  } else {
    return `${username} just Logged In`;
  }
}

// console.log(isLoggedIn('Aditya'));
// console.log(isLoggedIn('Haritima '));

// when nothing gets passed as argument then function return undefined
console.log(isLoggedIn());
