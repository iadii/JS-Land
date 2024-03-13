// The setTimeout() function is used to execute a function or a specific piece of code after a specified delay (in milliseconds).
// deal for tasks that need to happen after a single wait period, like displaying a message after a few seconds.
// Returns a timer ID that can be used to cancel the scheduled execution using clearTimeout().
// Syntax =>

// setTimeout(callback, timeOut in mili second)

// first this execute
console.log("Hii There How are you !")

// Second this will execute
// but there is time limit for 3 sec so, it will move to execute next line
setTimeout(() => {

    // this will execute after 3 sec
    console.log("So, Tell me where have you been: ")
}, 3000);

// Since there is time limit then this will run before Technically it become 2nd to execute
console.log("I am Adii");

setTimeout(() => {
    console.log("I am fine");
}, 2000);

setTimeout(() => {
    console.log("Hii Adii It's nice to meet");
    console.log("How are you");
}, 1000)