var person = {
    age: 11,
    name :'Fernandin'
}


// função pura, pura = não altera o objeto logo não gera efeitos colaterais
function QAFPMI (person) {  //QAFPMI = Quantos Anos Faltam Para Maior Idade
    return 18 - person.age
}

// função imperativa ou impura, imperativa/impura = muda o objeto logo gera efeitos colaterais
function AI (person) {  //AI = ALMENTAR IDADE
    person.age = person.age + 1
}

AI 
(person)
var anosF = QAFPMI(person) //F = faltando
console.log(anosF)


