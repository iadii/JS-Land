
//  a promise is returned object to which you attach callback, instead of passing callbacks into a function

// it is not accepting callback 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.ceil(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject(`connection Timed out :(`)
            }
            else{
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    })
}


const request = fakeRequestPromise('yelp.com/api/coffee');

// if promise gets fulfilled we use then() method
// if it rejected we can use .catch() method

// we can use it by storing in a variable 
request.then(() => {
    console.log(`promise resolved normal`);
    console.log('yay it worked !!!!!!');
    
}).catch(() => {
    console.log(`promise rejected`);
    console.log(`ohh no error`);

})

// or we can use chaining

// fakeRequestPromise(`api.github.com/users/adii`)
// .then(() => {
//     console.log(`Yay github promise resolved `);
// }).catch(() => {
//     console.log(`oh no github promise rejected`);
// })


// we can also use multiple request like nested request 
// but it still less painful than callback hell 
fakeRequestPromise(`api.github.com/users/adii`)
.then(() => {
    console.log(`Yay github promise resolved `);
    fakeRequestPromise((`yelp.com/api/coffee/page2`))
    .then(() => {
        console.log(`it worked 2`);
        fakeRequestPromise((`yelp.com/api/coffee/page3`)).then(() => {
            console.log(`it worked 3`);
            fakeRequestPromise((`yelp.com/api/coffee/page4`)).then(() => {
                console.log(`it worked 4`);
                    
                }).catch(() => {
                    console.log(`oops3`);
                })
            }).catch(() => {
                console.log(`oops2`);
            })

    }).catch(() => {
        console.log(`oops1`);
    })
}).catch(() => {
    console.log(`oh no github promise rejected`);
})


// calling ranks doesn't matter means any promise will work first doesn't matter if it called later.