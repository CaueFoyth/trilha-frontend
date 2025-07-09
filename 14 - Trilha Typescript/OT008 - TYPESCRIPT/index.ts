type TipoA = { nome: string };
type TipoB = { idade: number };

function processar(valor: string | number, dados: TipoA & TipoB): void {
  console.log(`Valor: ${valor}`);
  console.log(`Nome: ${dados.nome}, Idade: ${dados.idade}`);
}

processar("Usuário", { nome: "João", idade: 30 });

//////////////////////////////////////////////////////////////

type TipoCondicional<T extends boolean> = T extends true ? string : number;

type Exemplo1 = TipoCondicional<true>;  
type Exemplo2 = TipoCondicional<false>; 

function obterValor<T extends boolean>(flag: T): TipoCondicional<T> {
  return (flag ? "Texto" : 42) as TipoCondicional<T>;
}

//////////////////////////////////////////////////////////////

type Configuracao = {
  tema: string;
  modoEscuro: boolean;
};

function atualizarConfiguracao(config: Partial<Configuracao>): void {
  console.log("Atualizando configurações:", config);
}

function exibirConfiguracao(config: Readonly<Configuracao>): void {
  console.log(`Tema: ${config.tema}, Modo Escuro: ${config.modoEscuro}`);
}

//////////////////////////////////////////////////////////////

type Paises = 'Brasil' | 'França' | 'Japão';

const capitais: Record<Paises, string> = {
  Brasil: "Brasília",
  França: "Paris",
  Japão: "Tóquio"
};

function buscarCapital(pais: Paises): string {
  return capitais[pais];
}

console.log(buscarCapital("Japão"));

//////////////////////////////////////////////////////////////

function criarListaParcial<T>(itens: Partial<T>[]): Partial<T>[] {
  return itens;
}

type User = {
  nome: string;
  email: string;
};

const lista = criarListaParcial<User>([
  { nome: "Ana" },
  { email: "joao@example.com" },
]);

console.log(lista);
