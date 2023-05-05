// - = continua na linha de baixo


//comportamento de quando se define uma variavel usando a key word var

// primeira caracteristica e o acesso dentro do scopo global (logo sempre irei ter acesso a ela chamando pelo age) exm:
var age = 21
console.log(age)
// segunda caracteristica e que ela e redeclaravel logo voce esta dando -
// um NOVO(mudando) valor a variavel ja declarada(e diferente de mutavel)
var age = 22 

//ela pode ser reatribuida logo voce esta reatribuindo um valor de uma variavel ja DECLARADA -
//(que eh diferente de redeclaravel)
age = 31

//ela e delimitada SOMENTE por funçoes e no exemplo abaixo daria um erro ao chamar a var nome -
//dizendo que ela não foi definida mesmo estando definida e isso por que ela esta dentro de uma função-
// NÃO é delimitada por blocos de codigo como um if por exemplo
function showName() {
    var nome = carlin
}

