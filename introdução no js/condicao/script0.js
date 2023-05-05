var person = {
    name: 'Vitin',
    age: 17
}

function checkAge (person) {
    console.log ("A idade da pessoa é: " + person.age)
    
    if (person.age != 18) { 
        console.log("Caiu na vila o peixe fuzila")
    }
    
}

checkAge(person)
