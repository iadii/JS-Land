// Stack(Primitive)  Heap(Non-Primitive)

let myFavFood = "Chicken"
// copy of myFavFood is assigned to whileIamHome where value "chicken" can't be changed by whileIamHome
let whileIamHome = myFavFood
whileIamHome = "Mutton"

console.log(myFavFood);
console.log(whileIamHome);

// Object is  Non - Primitive 
let user1 = {
    email : "myself@live.com",
    upi : "9771893609@paytm"
}

// Here reference of user1 assigned to user2, so user2 can directly make changes to user1
let user2 = user1;

user2.email = "mishraaditya@live.com"
user2.upi = "9931413416@ibl"

console.log(user1);