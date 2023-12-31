// Singleton
// Object.create()

// Object Literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Aditya",
    "full name" : "Kumar Aditya Mishra",
    [mySym] : "myKey1",
    age : 23,
    position : "Software Engineer",
    email : "mishraaditya@gmail.com",
    location : "Seattle",
    phone : 9771893609,
    upi : "9771893609@paytm",
    isLoggedIn : false ,
    lastLogInDays : ['Monday', 'Saturday']
}

// accessing object
// console.log(jsUser);

// console.log(jsUser.age);
// console.log(jsUser.upi);

// another way of accessing the object
// in this you will have to pass it as string

// console.log(jsUser['email']);
// console.log(jsUser['location']);

console.log(jsUser['full name']); //there is no other way to access it using dot method

console.log(jsUser[mySym]);

jsUser.phonepe = "9771893609@ybl"
jsUser.email = "mishraaditya@live.com" //we can change the value of object

// we can freeze the object so no changes happen further
// Object.freeze(jsUser)

// it will not give any error but changes won't propagate becoz of object.freeze
jsUser.upi = "9931413416@ibl"

console.log(jsUser);

jsUser.greeting = function() { 
    console.log("Hello Js User");
}

// we use "this" becoz we want to refer the same object 
jsUser.want = function(){
    console.log(`hello ${this["full name"]} soon you are going to be ${this.position} at ${this.location} `);
}

console.log(jsUser.want());