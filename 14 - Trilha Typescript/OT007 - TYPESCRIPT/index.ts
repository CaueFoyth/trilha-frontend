function primeiroElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(primeiroElemento([10, 20, 30]));   
console.log(primeiroElemento(["a", "b", "c"]));
console.log(primeiroElemento<boolean>([true, false]));

//////////////////////////////////////////////////////////////

interface Pilha<T> {
  push(item: T): void;
  pop(): T | undefined;
}

class PilhaArray<T> implements Pilha<T> {
  private itens: T[] = [];

  push(item: T): void {
    this.itens.push(item);
  }

  pop(): T | undefined {
    return this.itens.pop();
  }
}

const pilhaNumeros = new PilhaArray<number>();
pilhaNumeros.push(1);
pilhaNumeros.push(2);
console.log(pilhaNumeros.pop()); 
console.log(pilhaNumeros.pop()); 

//////////////////////////////////////////////////////////////

class Mapa<K, V> {
  private dados: { chave: K; valor: V }[] = [];

  set(chave: K, valor: V): void {
    const item = this.dados.find(entry => entry.chave === chave);
    if (item) {
      item.valor = valor;
    } else {
      this.dados.push({ chave, valor });
    }
  }

  get(chave: K): V | undefined {
    const item = this.dados.find(entry => entry.chave === chave);
    return item?.valor;
  }
}

const mapa = new Mapa<string, number>();
mapa.set("idade", 30);
console.log(mapa.get("idade")); // 30

//////////////////////////////////////////////////////////////

function tamanho<T extends string | any[]>(entrada: T): number {
  return entrada.length;
}

console.log(tamanho("Olá mundo"));    // 10
console.log(tamanho([1, 2, 3, 4]));   // 4

//////////////////////////////////////////////////////////////

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const usuario = { nome: "João", idade: 25 };
const endereco = { cidade: "São Paulo", pais: "Brasil" };

const usuarioCompleto = mergeObjects(usuario, endereco);
console.log(usuarioCompleto);