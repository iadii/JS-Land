const temp = 41

if(temp <= 50 ){
    console.log("Executed");

}
else{
    console.log("Not Executed");
}

// will not work
// you directly can't check the value with datatype
// if(temp <= Number){
//     console.log("Executed");

// }
// else{
//     console.log("Not Executed");
// } //Not Executed







const user = (Math.floor(Math.random() * 100) + 1)
console.log(user);

if(user < 10){
    const superPower = "see Though"
    console.log(`User has ${superPower}`);
}
else if(user >= 10  && user < 20){
    const superPower = "Laser Eye"
    console.log(`User has ${superPower}`);
}
else if(user >= 20  && user < 30){
    const superPower = "Run Fast"
    console.log(`User has ${superPower}`);
}
else if(user >= 40  && user < 50){
    const superPower = "Fly"
    console.log(`User has ${superPower}`);
}
else if(user >= 50  && user < 60){
    const superPower = "Money and Brain like Iron Man"
    console.log(`User has ${superPower}`);
}
else if(user >= 60  && user < 70){
    const superPower = "Spider Web"
    console.log(`User has ${superPower}`);
}
else if(user >= 70  && user < 80){
    const superPower = "Super Strength like Captain America "
    console.log(`User has ${superPower}`);
}
else if(user >= 80  && user < 90){
    const superPower = "God Power like Thor"
    console.log(`User has ${superPower}`);
}
else if(user >= 90){
    const superPower = "Super man"
    var hero = "super man 2"
    console.log(`User is ${superPower}`);
}

// console.log(`User is ${superPower}`); //it will give error because superpower declared in if scope
// console.log(`User is ${hero}`); //it will not give error because var gets leaked



// Shorthand
// implicit scope

const balance = 100

if(balance > 500) console.log("grab ps5");

// we can use comma for multiple but it is not professional to use it
else console.log("Study hard and earn hard"),
console.log("test");