// callTwice(randomNum) //hoisting in higher level
function callTwice(func) {
  func();
  func();
}

function randomNum() {
  const roll = Math.floor(Math.random() * 6) + 1;
  //   console.log(roll);
}

callTwice(randomNum);

function callThrice(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

callThrice(randomNum);

// Functions as return values

function multiplier(factor) {
  return function (x) {
    console.log(factor);

    return x * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
// console.log(double(5));
// console.log(triple(5));

function makeMysteryfunc() {
  const rand = Math.random();

  if (rand > 0.5) {
    return function () {
      console.log("You win Million dollar");
    };
  } else {
    return function () {
      console.warn("You have been injected by computer virus");
      console.warn("Do not close this window");
    };
  }
}

// we can call those funtion but we need to hold the values of returned function in a variable
const mystery = makeMysteryfunc();

// mystery();

// is between
function isbetweenFunc(min, max){

    return function(num){
        return num >= min && num <= max
    }
}

const isBetween = isbetweenFunc(1,10)

console.log(isBetween(40));