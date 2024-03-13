const person = {
    name : "Kumar Aditya Mishra",
    nickname : "Adii",
    email : ["mishraaditya3456@gmail.com", "mishraaditya@live.com"],
    phone : [9771893609, 9931413416],
    isWorking : false,
    itStudying : true
}

console.log("Sending request to server");
setTimeout(() => {
    console.log("Here's data from server");
})

setTimeout(() => {
    console.log(person)
}, 3000)

console.log("I am at the end of fetching data")