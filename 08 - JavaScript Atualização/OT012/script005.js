let movie = {
    title: "Até o Último Homem",
    director: "Mel Gibson"
}

let movieAditionalAttributes = {
    ...movie,
    year: 2016,
    genre: "Guerra"
}

console.log(movie);
console.log(movieAditionalAttributes);