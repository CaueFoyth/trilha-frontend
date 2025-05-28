let variavelAleatoria = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retornarArray(array) {
    return array[1];
}

console.log(retornarArray(variavelAleatoria)); // Saída: 2

function funcao(array, numero) {
    return array[numero];
}

console.log(funcao(variavelAleatoria, 3)); // Saída: 4

let arrayComTiposDiferentes = [1, 'texto', true, null, "Ultimo elemento"];
arrayComTiposDiferentes.forEach((elemento, indice) => {
    console.log(funcao(arrayComTiposDiferentes, indice));
});

function book(nomeLivro) {
    const livros = {
        "O Senhor dos Anéis": {
            quantidadePaginas: 1200,
            autor: "J.R.R. Tolkien",
            editora: "HarperCollins"
        },
        "Dom Casmurro": {
            quantidadePaginas: 256,
            autor: "Machado de Assis",
            editora: "Principis"
        },
        "Harry Potter e a Pedra Filosofal": {
            quantidadePaginas: 223,
            autor: "J.K. Rowling",
            editora: "Rocco"
        }
    };
    return nomeLivro ? livros[nomeLivro] : livros;
}

// Imprime o objeto com todos os livros
console.log(book());

// Imprime a quantidade de páginas de um livro
const nomeLivro1 = "Dom Casmurro";
console.log(`O livro ${nomeLivro1} tem ${book(nomeLivro1).quantidadePaginas} páginas!`);

// Imprime o nome do autor de um livro
const nomeLivro2 = "O Senhor dos Anéis";
console.log(`O autor do livro ${nomeLivro2} é ${book(nomeLivro2).autor}.`);

// Imprime o nome da editora de um livro
const nomeLivro3 = "Harry Potter e a Pedra Filosofal";
console.log(`O livro ${nomeLivro3} foi publicado pela editora ${book(nomeLivro3).editora}.`);