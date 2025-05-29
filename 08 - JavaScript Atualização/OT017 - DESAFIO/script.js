let championship = "Campeonato Catarinense de Futebol";

console.log(championship);

let teams = [
    { nome: "Criciúma", posicao: 1 },
    { nome: "Avaí", posicao: 3 },
    { nome: "Brusque", posicao: 4 },
    { nome: "Chapecoense", posicao: 5 },
    { nome: "Joinville", posicao: 8 },
];

console.log("Times que estão participando do campeonato: ");
teams.forEach(team => {
    console.log(`${team.posicao}º lugar: ${team.nome}`);
});

function showTeamPosition(number) {
    const team = teams.find(team => team.posicao === number && number >= 1 && number <= 5);
    if (team) {
        return `O time que está em ${number}º lugar é: ${team.nome}`;
    } else {
        return "Não temos a informação do time que está nessa posição.";
    }
}

console.log();

console.log(showTeamPosition(1)); // "O time que está em 1º lugar é: Criciúma"
console.log(showTeamPosition(2)); // "Não temos a informação do time que está nessa posição."
console.log(showTeamPosition(3)); // "O time que está em 3º lugar é: Avaí"
console.log(showTeamPosition(5)); // "O time que está em 5º lugar é: Chapecoense"
console.log(showTeamPosition(8)); // "Não temos a informação do time que está nessa posição."


//---------------------------------------------------------------------------------------------------------------------//
console.log();
//---------------------------------------------------------------------------------------------------------------------//

let i = 20;
while(i <= 30){
    console.log(i);
    i++;
}

//---------------------------------------------------------------------------------------------------------------------//
console.log();
//---------------------------------------------------------------------------------------------------------------------//

function convertToHex(color){
    switch(color){
        case "vermelho":
            return `O hexadecimal para a ${color} é: #ff0000`;
        case "verde":
            return `O hexadecimal para a ${color} é: #00ff00`;
        case "azul":
            return `O hexadecimal para a ${color} é: #0000ff`;
        case "preto":
            return `O hexadecimal para a ${color} é: #000000`;
        case "branco":
            return `O hexadecimal para a ${color} é: #ffffff`;
        default:
            return `Não temos o equivalente hexadecimal para ${color}`;
    }
}

let colors = ["vermelho", "verde", "azul", "preto", "branco", "roxo", "amarelo", "prata"];

colors.forEach(color => {
    console.log(convertToHex(color));
})