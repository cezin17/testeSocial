const prompt = require("prompt-sync")({ sigint: true });

let grau = prompt('Coloque um valor em graus: ')
let rad = ((grau * Math.PI) / 180)//.toFixed(3)

let cosseno = Math.cos(rad).toFixed(2)
let seno = Math.sin(rad).toFixed(2)
let tangente = Math.tan(rad).toFixed(2)

console.log(`O cosseno de ${rad}rad é ${cosseno}`)
console.log(`O seno de ${rad}rad é ${seno}`)
console.log(`A tangente de ${rad}rad é ${tangente}`)