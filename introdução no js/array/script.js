var p1 = {
    name: 'Vitor',
    Age: 22
}

var p2 = {
    name: 'cleitin',
    Age: 22
}

var p3 = {
    name: 'johnas',
    Age: 22
}


var list = [p1, p2, p3]

console.log(list)

console.log(
    list[0].name
    )

console.log(
    list[1].name
    )

console.log(
    list[2].name
    )

    for (var person of list) {
        console.log(person)
    }

    for (var person of list) {
        console.log(person.name)
    }