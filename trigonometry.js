const prompt = require("prompt-sync")({ sigint: true });

let rad = prompt('Coloque um valor em radiano: ')
let graus = (180 * rad / Math.PI).toFixed(0)

let cosseno = Math.cos(rad).toFixed(2)
let seno = Math.sin(rad).toFixed(2)
let tangente = Math.tan(rad).toFixed(2)

console.log(`O cosseno de ${graus}° é ${cosseno}`)
console.log(`O seno de ${graus}° é ${seno}`)
console.log(`A tangente de ${graus}° é ${tangente}`)