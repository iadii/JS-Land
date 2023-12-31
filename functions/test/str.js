/*Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid" */

function capitalize(str){
    const strCap = str[0].toUpperCase()
    const strCap2 = str.slice(1, str[str.length])
    console.log(strCap + strCap2)
    // return strCap2
    // return str[0].toUpperCase()
}
capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"

