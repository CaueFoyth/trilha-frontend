let books = new Map()

books.set("Ultra-aprendizado", "Scott Young")
books.set("Como fazer amigos e influenciar pessoas", "Dale Carnegie")
books.set("Entendendo algoritmos", "Aditya Bhargava")

console.log("Livros: ")

for (let [key, value] of books) {
    console.log(`${key}, ${value}`)
}