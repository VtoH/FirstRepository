//booleano trabalha apenas com duas possibilidades, verdadeiro ou falso, 1 ou 0 exm;

var condicao = (true) // se for true cai no if, se for false cai no else logo o valor e buliano

if (condicao) {
    console.log ("e verdade maneh")
}

else {
    console.log ("e fake news")
}


//truthy age como true e falsy age como false
// valores truthy = if (true), if ({}), if ([]), if (42), if ("foo"), if (new Date()), if (-42), if (3.14), if (-3.14), if (Infinity), if (-Infinity) {esse 42 e esse -42 representa que qualquer numero negativo ou positivo diferente de 0 eh truthy}
// valores falsy = if (false), if (null), if (undefined), if (0), if (NaN), if (''), if (document.all) [1] 
//truthy https://developer.mozilla.org/pt-BR/docs/Glossary/Truthy
//falsy https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy

var array = []
var value = {};

if (array.length) { // como o length conta quantas informçoes tem no array e o resultado e zero logo o resultado e falso pois 0 e falsy, se fosse qualquer outro numero seria um truthy
    console.log("a condição e verdadeira")
}

else{
    console.log("a condição e falsa")
}

console.log(!value) // como o [] e truthy o que o ! esta fazendo e negando ele e o transformando em false

console.log(!!value) // como o [] e truthy o que o !! esta fazendo e negando a negação  transformando em true novamente