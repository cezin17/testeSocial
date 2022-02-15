const prompt = require("prompt-sync")({ sigint: true });
function gayTest() {
    let i = 1 
    while(i >= 1) {
        let gay = prompt("Digite seu nome: ")
        if (gay == 'Cezar' || gay == 'Paulo' || gay == 'Cezar Jardim') console.log("Não importa quantas vezes você faça esse teste, você é 100% HOMEM😎")

        else if (gay == 'Matheus Rodrigues' || gay == 'Matheus' || gay == 'Lucas' || gay == 'Lucas Cardoso'){
            console.log("Você é extremamente gay🌈")
        }

        else if (gay == ' ' || gay == '') console.log('Você é 100% gay e burro🐴, digite um nome, acéfalo🧠')  
            
        else {
            percentual = Math.floor(Math.random() * 101)
            console.log(gay +', você é ' + String(percentual) +"% gay🌈")
        }
    }
    i++
}
gayTest()