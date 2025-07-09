interface Contato {
  email: string;
  telefone: string;
}

function imprimirContato(contato: Contato): void {
  console.log(`Email: ${contato.email}`);
  console.log(`Telefone: ${contato.telefone}`);
}

imprimirContato({ email: "joao@email.com", telefone: "1234-5678" });

//////////////////////////////////////////////////////////////

type OperacaoMatematica = (a: number, b: number) => number;

const soma: OperacaoMatematica = (a, b) => a + b;
const subtracao: OperacaoMatematica = (a, b) => a - b;
const multiplicacao: OperacaoMatematica = (a, b) => a * b;
const divisao: OperacaoMatematica = (a, b) => a / b;

console.log(soma(10, 5));          
console.log(subtracao(10, 5));     
console.log(multiplicacao(10, 5)); 
console.log(divisao(10, 5));       

//////////////////////////////////////////////////////////////

interface Configuracao {
  background?: string;
}

function definirConfiguracao(config: Configuracao): void {
  if (config.background) {
    console.log(`Background definido para: ${config.background}`);
  } else {
    console.log("Usando background padrão.");
  }
}

definirConfiguracao({ background: "azul" });
definirConfiguracao({});

//////////////////////////////////////////////////////////////

function formatarEntrada(input: string | string[]): string {
  if (typeof input === "string") {
    return input;
  } else {
    return input.join(", ");
  }
}

console.log(formatarEntrada("texto único"));
console.log(formatarEntrada(["um", "dois", "três"]));;

//////////////////////////////////////////////////////////////

interface Jogo {
  nome: string;
  preco: number;
  jogar?: () => void;
}

function apresentarJogo(jogo: Jogo): void {
  console.log(`Jogo: ${jogo.nome} - Preço: R$ ${jogo.preco}`);
  if (jogo.jogar) {
    console.log("Vamos jogar!");
    jogo.jogar();
  } else {
    console.log("Esse jogo não está disponível para jogar agora.");
  }
}

const jogo1: Jogo = {
  nome: "Futebol 2025",
  preco: 199.90,
  jogar: () => console.log("Iniciando o jogo...")
};

const jogo2: Jogo = {
  nome: "Xadrez Clássico",
  preco: 49.90
};

apresentarJogo(jogo1);
apresentarJogo(jogo2);
