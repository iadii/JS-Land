const tinderUser = Object()

tinderUser.id = 1
tinderUser.name = "Sammy"
tinderUser.sex = "Male"

// console.log(tinderUser);

const user = {

    email : "sammy@gamil.com",
    address : {
        permanentAddress : {
            homeCity : "toronto",
            province : "ontario",
            connection : [+1979237782, "user@github.com", "@sammywada"]
            
        },
        currentAddress : {
            homeCity : "Montreal",
            province : "Quebec",
            connection : [+19612878327, "user@github.com", "@sammywada"]
        }
    },
    fullName : {
        userName : {
            firstName : "Sammy",
            middleName : "E",
            lastName : "wada"
        }
    }
}

// accessing

// console.log(user.address.currentAddress.connection[1]); //user@github.com

// console.log(user.fullName["userName"]); //{ firstName: 'Sammy', middleName: 'E', lastName: 'wada' }


const ob1 = {1 : 'a', 2 : 'b'}
const ob2 = {3 : 'c', 4 : 'd'}
const ob5 = {5 : 'e', 6 : 'f'}

const ob = {ob1,ob2}
// { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }
// console.log(ob);

// in this both objects ob1 and ob2 become source object and get copies to {} target object which is blank
const ob3 = Object.assign({},ob1,ob2,ob5)

// in this ob1(first) become target object and all other objects will get copies to target object
const ob4 = Object.assign(ob1,ob2,ob5)
// console.log(ob4);

// spread operator
const ob6 = {...ob1, ...ob2, ...ob5}
console.log(ob6);

// it will return an array
console.log(Object.keys(user)); //[ 'email', 'address', 'fullName' ]

console.log(Object.values(user));

console.log(user.hasOwnProperty('ad')); //false
console.log(user.hasOwnProperty('fullName')); //true