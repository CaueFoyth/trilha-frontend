const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function main() {
    let number = await input("Digite a nota do aluno: ");

    number >=0 && number < 6 ? console.log("Reprovado") : console.log("Nota inválida");
    number >=6 && number < 7 ? (console.log("Recuperação")) : null;
    number >= 7 && number <= 10 ? (console.log("Aprovado")) : null;

}

main().then(() => {
    rl.close();
});