
function bazaar(product, price, quantity){
    return `you bought ${quantity} kg of  ${product}. Total is ₹${price * quantity}`;
}
console.log(bazaar('Chicken',200,1.2));
console.log(bazaar('Mutton',700,2));
console.log(bazaar('Apple',312,2.3));



// String Concatenation 
function myInfo(fname, lname, country) { 
    return "My name is " + fname + " " + lname + ". " + country + " is my favorite country."; 
               
} 
console.log(myInfo("john", "doe", "India")); 

// String Concatenation  
function myInfo1(fname, lname, country){
    return `My name is ${fname} ${lname}. ${country} is my favorite country`;
}
console.log(myInfo("Aditya", "Mishra", "India")); 
