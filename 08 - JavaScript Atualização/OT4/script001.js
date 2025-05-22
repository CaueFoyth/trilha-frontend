let age = 19;

age < 0 ? (console.log("Idade inválida"), process.exit()) : null;

if (age < 13) {
    console.log("Criança");
} else if (age < 18) {
    console.log("Adolescente");
} else if (age < 64) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}