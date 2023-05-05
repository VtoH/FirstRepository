function greet () {
    console.log ("Hello World")
}

greet()

function greet0 (name) {
    console.log ("Hello World " + name)
}

greet0()

function greet1 (name) {
    console.log ("Hello World " + name)
}

greet1('Vitor')
greet1('Cleitin')
greet1('Johnas')

function greet2 (name = 'Vitin') {
    console.log ("Hello World " + name)
}

greet2()
greet2('Cleitin')

function greetR (name = "Cyber") {
    return ("Hello World " + name)
}

console.log (greetR())

function greetR0 (name = "Cyber") {
    return ("Hello World " + name)
}

var greeting = greetR0('Vitinhow')

console.log(greeting)