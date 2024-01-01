// syntax
// for(initialization; condition; increment/decrement){}

for (let i = 0; i <= 10; i+=2) {
    const element = i
    if(element == 5){
        console.log("5 is mid");
    }
    
    // console.log(element);

}


for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value ${i}`);
    for(let j = 0; j < 10; j++)
    {
        // console.log(`Inner loop value of j is ${j} and inner value of i is ${i}`);

        console.log(`${i} * ${j} = ${i*j}`);
    }
}


// break
// if condition gets true then loop will get stop
for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log(`5 id detected ${i}, Now the iteration will get break`);    
        break
    }
    console.log(`value of i is ${i}`);
}

console.log();
// continue
// condition will get skipped in loop
for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log(`5 id detected ${i}, Now the iteration will skip 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}