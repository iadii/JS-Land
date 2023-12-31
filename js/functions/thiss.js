const msg = {
    author : "Aditya",
    person : "vats",
    mes : "you will gonna earn shitton of money ❤️",
    wel(){
        // inside of object this refers to current context such as aditya as author and so many key values
        console.log(this); 
        return `Hey ${this.person} our author ${this.author} want to say that  ${this.mes} to you`

    }
    
}

// msg.wel()


//in node environment this refers to {}(empty object) becoz there is not context in global
// whereas in browser environment the global object is window (DOM )

function chia(){

    // return many things
    console.log(this); 

    let seeds = "chiaseeds"
    console.log(this.seeds); //undefined becoz this works with o bject context
}
chia()


function per(man){
    console.log(`${this.man} is idiot`)
}
console.log(per("ramndom"));