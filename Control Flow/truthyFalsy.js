// falsy values 
// false, 0 , -0, BigInt 0n, "", null, Undefined , NaN

// Truthy values
// Every values except falsy is truthy

// surprising truthy values
// "0", 'false', " ", [], {}, function(){} 

// example

const arrEmpty = []

if(arrEmpty){
    console.log("executed using truthy values");
}


if(function(){}){
    console.log("hii there");
}
let a = function(){}
if(a){
    console.log("hii there function in variable");
}


if([]){
    console.log("hii there 2");
}

if({}){
    console.log("hii there 3");
}

if('false'){
    console.log("hii there 4");
}

