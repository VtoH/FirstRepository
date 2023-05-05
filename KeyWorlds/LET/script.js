// primeira caracteristica e o acesso dentro do scopo exemplo:
let age = 21
console.log(age)

// segunda e que ela NÃO é redeclaravel logo o exemplo abaixo geraria um erro:
//let a = 32
//let a = 33
//console.log(age)


//ela pode ser reatribuida 
let idade = 22
idade = 32

console.log(idade)

//ela e limitadas  por blocos (NÃO por funçoes) de codigo exemplo:

let idade1 = 15 

if (idade1 < 18) {
    let QAFPOD = idade1 - 18 //QAFPOD = Quantos Anos Faltam Pros Dezoito
    console.log(QAFPOD)
}

//se eu tento chamar a const QAFPOD fora deste bloco de codigo dara um erro como c pode ver no exemplo-
//abaixo
//console.log(QAFPOD)

