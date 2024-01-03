const obj = {
    'IN' :  "India",
    "UK" :  "United Kingdom",
    "USA" :  "United State of America",
    "Fr" :  "France"
}

for (const key in obj) {
    // console.log(key); //key
    // console.log(obj[key]); //value

    // console.log(`Value of ${key} => ${obj[key]}`);

}

// map is not iterable for in 
const map = new Map()

map.set(1, "India");
map.set("us", "USA")

for (const [key, value] in map) {

    console.log(typeof value);

}


