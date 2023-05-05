//- = continua na linha de baixo

// primeira caracteristica e o acesso dentro do scopo exemplo:
const age = 21
console.log(age)

// segunda e que ela NÃO é redeclaravel logo o exemplo abaixo geraria um erro:
//const a = 32
//const a = 33
//console.log(age)


//ela NÃO pode ser reatribuida logo o exemplo abaixo geraria um erro:
//const a = 21
//a = 22


//ela e imutavel? não  por exemplo
// as constantes podem sim ser modificadas mais não podem receber um novo valor
const person = {
    Idade: 13,
    nome: 'Cleitin',
    sexo: "F"
}

person.Idade = 18

console.log(person)

//ela e limitadas por funçoes e por blocos de codigo exemplo

const idade = 15 

if (idade < 18) {
    const QAFPOD = idade - 18 //QAFPOD = Quantos Anos Faltam Pros Dezoito
    console.log(QAFPOD)
}

//se eu tento chamar a const QAFPOD fora deste bloco de codigo dara um erro como c pode ver no exemplo-
//abaixo
// console.log(QAFPOD)


// ela pode ser reatribuida da seguinte forma:

const a = 12

if (a < 18) { // este 'a' se remete ao 12
    const a = 16
    const QAFPOD = a - 18 // este 'a' se remete ao 16, isto e considerado uma pessimo habito de programação -
    console.log(QAFPOD) // ja que isso pode facilmente ser mudado com o alterar de nome da segunda cons
                          
}