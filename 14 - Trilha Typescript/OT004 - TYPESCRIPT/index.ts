function concatenaNomes(nome: string, sobrenome: string): string {
  return `${nome} ${sobrenome}`;
}

console.log(concatenaNomes("Ana", "Silva"));

//////////////////////////////////////////////////////////////
function soma(a: number, b: number): number {
  return a + b;
}

//////////////////////////////////////////////////////////////

const soma2 = (a: number, b: number): number => a + b;

console.log(soma2(5, 3));

//////////////////////////////////////////////////////////////

function saudacao(nome: string, titulo?: string): string {
  if (titulo) {
    return `Olá, ${titulo} ${nome}`;
  }
  return `Olá, ${nome}`;
}

console.log(saudacao("Carlos"));
console.log(saudacao("Carlos", "Dr."));

//////////////////////////////////////////////////////////////

function ajustar(valor: number): number;
function ajustar(valor: string): string;

function ajustar(valor: any): any {
  if (typeof valor === "number") {
    return valor * 2
  } else if (typeof valor === "string") {
    return valor.trim(); // Remove espaços
  }
}

console.log(ajustar(10));
console.log(ajustar("  teste "));

//////////////////////////////////////////////////////////////

function incrementa(numero: number, incremento: number = 1): number {
  return numero + incremento;
}

console.log(incrementa(10));
console.log(incrementa(10, 5));
