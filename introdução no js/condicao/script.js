var person = {
    name: 'Vitin',
    age: 18
}

function checkAge (person) {
    console.log ("A idade da pessoa é: " + person.age)
    // if = se, else = se não 
    if (person.age >= 18) { 
    // > maior que >= maior ou igual, < menor que, <= menor igual, == igual, === verifica o valor e o tipo, != diferente
        console.log("É maior de idade")
    }
    else  {
        console.log("e menor de idade")
    }

}

checkAge(person)
