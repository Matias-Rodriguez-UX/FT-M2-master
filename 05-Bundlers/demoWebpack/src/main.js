let{count} = require('./counter')

let name = "Matias";

function nameLog(name){
    console.log(name)
}

nameLog(name)
console.log(count(3))