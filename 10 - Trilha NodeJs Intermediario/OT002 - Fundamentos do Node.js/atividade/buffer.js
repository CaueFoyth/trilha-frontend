const texto = "Olá, mundo!";

const buffer = Buffer.from(texto, 'utf-8');

console.log("Buffer:", buffer);
console.log("Hexadecimal:", buffer.toString('hex'));
console.log("Base64:", buffer.toString('base64'));

const textoOriginal = buffer.toString('utf-8');
console.log("Texto original:", textoOriginal);