// map stores Unique values
// map doesn't support duplicacy
// Map stores in order same as give it as input

const map = new Map();

map.set("IN", "India");
map.set("UK", "United Kingdom");
map.set("USA", "United State of America");
map.set("Fr", "France");

console.log(map);
/*
Map(4) {
    'IN' => 'India',
    'UK' => 'United Kingdom',
    'USA' => 'United State of America',
    'Fr' => 'France'
  } */

// it will return map as array
for (const key of map) {
  console.log(key);
}
/*[ 'IN', 'India' ]
[ 'UK', 'United Kingdom' ]
[ 'USA', 'United State of America' ]
[ 'Fr', 'France' ]  */

// but if we don't want it as array we can destructure array as [key, value]
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

/* IN :- India
UK :- United Kingdom
USA :- United State of America
Fr :- France */

map.forEach((valu, key) => {
  console.log(`${key}: ${valu}`);
});



const person = {
    name: 'John',
    age: 30,
    job: 'Developer'
  };
// Iterate over each property (key) in the 'person' object
for (const key in person) {
    // Check if the property is an own property of the object (not inherited)
    if (person.hasOwnProperty(key)) {
      // Print the key and its corresponding value
      console.log(`${key}: ${person[key]}`);
    }
  }
  
