let books = new Map()

books.set("Ultra-aprendizado", "Scott Young")
books.set("Como fazer amigos e influenciar pessoas", "Dale Carnegie")
books.set("Entendendo algoritmos", "Aditya Bhargava")

console.log(`Quantidade de livros: ${books.size}`)
books.delete("Ultra-aprendizado")
console.log(`Ultra-aprendizado ainda está? ${books.has("Ultra-aprendizado")}`)