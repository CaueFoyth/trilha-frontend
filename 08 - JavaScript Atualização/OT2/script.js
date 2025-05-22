let animais = []
animais.push("cachorro", "gato", "elefante")
console.log(animais)

console.log('-'.repeat(50))

animais.shift()
console.log(animais)

console.log('-'.repeat(50))

animais.unshift("leão")
console.log(animais)

console.log('-'.repeat(50))

animais[1] = "girafa"
console.log(animais)

console.log('-'.repeat(50))

// Frutas
let frutas = []
frutas.push("banana", "maca", "laranja", "uva")
console.log(frutas)
console.log(`Quantidade de frutas: ${frutas.length}`)

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}° fruta: ${frutas[i]}`)
}