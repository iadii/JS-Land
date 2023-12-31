let myDate = new Date()

console.log(myDate ); // 2023-12-23T11:05:00.950Z
console.log(myDate.toString()); // Sat Dec 23 2023 16:35:00 GMT+0530 (India Standard Time)

console.log(myDate.toISOString()); // 2023-12-23T11:05:00.950Z
console.log(myDate.toUTCString()); // Sat, 23 Dec 2023 11:05:00 GMT


console.log(myDate.toDateString()); // Sat Dec 23 2023
console.log(myDate.toJSON());  // 2023-12-23T11:05:00.950Z

console.log(myDate.toLocaleDateString()); // 12/23/2023
console.log(myDate.toLocaleTimeString()); // 4:35:00 PM
console.log(myDate.toLocaleString()); // 12/23/2023, 4:35:00 PM


const myCurrentDate = new Date(2023,  0, 3, 16,59,46)
console.log(myCurrentDate.toDateString());

console.log(myCurrentDate.toString()); //Tue Jan 03 2023 16:59:46 GMT+0530 (India Standard Time)
console.log(myCurrentDate.toLocaleString());  // 1/3/2023, 4:59:46 PM

let myCreatedDate = new Date("1-12-2023")
let myCreatedDate1 = new Date("2023-02-2023")
console.log(myCreatedDate.toLocaleString());

// Time Stamp
const myTimeStamp = Date.now();
console.log(myTimeStamp); //1703340800763 

// or

console.log(myCreatedDate.getTime()); //1673461800000

// below two are Same
console.log(Math.floor(myTimeStamp/1000)); //1703341356
console.log(Math.floor(Date.now()/1000)); //1703341356

let newDate = new Date();

console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1); //becoz month starts from 0 

// using toLocaleString we can Customise how we want to see out Date/Day Format
console.log(newDate.toLocaleString('default', {
    weekday : "long",
    // timeStyle : 'medium',
    // timeZone : 'GMT+0530'

}));