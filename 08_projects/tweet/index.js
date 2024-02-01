const btn = document.querySelector('#btn')
const list = document.querySelector('#list')

const form = document.querySelector('#twtForm')
// we can also do this
// we can also iterate using form.elements



form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const usr = form.elements.username;
    const twt = form.elements.tweet;
    addTweet(usr.value, twt.value)

    // resetting the value
    usr.value = '';
    twt.value = ''
   
})

const addTweet = (usr, twt) => {

    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')


    bTag.append(usr)
    newTweet.append(bTag)
    newTweet.append(` - ${twt}`)

    console.log(newTweet);

    list.appendChild(newTweet)
}