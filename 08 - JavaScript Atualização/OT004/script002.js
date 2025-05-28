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
    let number = await input("Digite um número de 1 a 5: ");

    switch (number) {
        case "1":
            console.log("Você errou");
            break;
        case "2":
            console.log("Você errou");
            break;
        case "3":
            console.log("Você acertou");
            break;
        case "4":
            console.log("Você errou");
            break;
        case "5":
            console.log("Você errou");
            break;
        default:
            console.log("Número inválido");

    }
}

main().then(() => {
    rl.close();
});