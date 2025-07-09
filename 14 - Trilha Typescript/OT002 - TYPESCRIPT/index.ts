let nome: string = "Maria";
let idade: number = 30;
let ativo: boolean = true;

console.log(nome, idade, ativo);

//////////////////////////////////////////////////////////////

function somarNumeros(numeros: number[]): number {
  return numeros.reduce((total, num) => total + num, 0);
}

const resultado = somarNumeros([10, 20, 30]);
console.log(resultado); // 60

//////////////////////////////////////////////////////////////

enum DiaDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo
}

function mensagemDoDia(dia: DiaDaSemana): void {
  switch (dia) {
    case DiaDaSemana.Segunda:
      console.log("Começando a semana!");
      break;
    case DiaDaSemana.Sexta:
      console.log("Sextou!");
      break;
    case DiaDaSemana.Domingo:
      console.log("Dia de descanso.");
      break;
    default:
      console.log("Dia comum.");
  }
}

mensagemDoDia(DiaDaSemana.Sexta); 

//////////////////////////////////////////////////////////////

type Produto = [string, number];

const produto: Produto = ["Notebook", 3500.50];

function imprimirProduto(p: Produto): void {
  console.log(`Produto: ${p[0]} - Preço: R$ ${p[1]}`);
}

imprimirProduto(produto);

//////////////////////////////////////////////////////////////

let variavel: any;

variavel = 42;
console.log(variavel);

variavel = "Texto agora";
console.log(variavel);

variavel = { chave: "valor" };
console.log(variavel);

function logMensagem(): void {
  console.log("Essa função não retorna nada.");
}

function retornaIndefinido(): undefined {
  return undefined;
}

logMensagem();
console.log(retornaIndefinido());
