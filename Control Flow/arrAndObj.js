const arr = [2,3,4,5]
if(arr.length > 0){
    console.log(arr);
}
else{
    console.log("array me value nhi hai");
}


const obj = {
    name : "Aditya",
    instructor : "hitesh"
}
const obj1 = {}

// Object.keys() will return array which previously was object

if(Object.keys(obj).length > 0){
    console.log(obj);
}
else{
    console.log("object is empty");
}