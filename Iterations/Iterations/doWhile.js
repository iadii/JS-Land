// it ensures that work done at least one time
// first work will done then condition will get checked

let x = 0

do{
    // console.log(`value of x is ${x}`);
    x++
}while(x < 10)

// condition false 
let z = 11

do{
    // console.log(`value of z is ${z}`);
    z++
}while(z < 10) //11 will get print because body runs before checking condition at least once

// nested

let i = 1
do{
    let j = 1
    do{
        console.log(`${i} * ${j} = ${i*j}`);
        j++
    }while(j<i)
    i++
}while(i<10)


