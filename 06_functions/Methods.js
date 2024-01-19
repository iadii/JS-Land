//  functions in object is Method
const fun = {

    Pi : 3.14,

    square : function(num){
        return num ** 2
    },

    cube : function(num){
        return num ** 3
    }
}

// console.log(fun.cube(5));
// console.log(fun["square"](8));


// ShortHand

const func = {
    Author : "Aditya",

    square(num){
        return num ** 2
    },

    cube(num){
        return num ** 3
    }
}
// console.log(func.Author);
// console.log(func["cube"](7));



const msg = {
    author : "Aditya",
    person : "vats",
    mes : "❤️",
    wel(){
        return `Hey ${this.person} our author ${this.author} want to say that he ${this.mes} to you`
    }
}

console.log(msg.wel());