import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'usuario.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  try {
    const usuario = JSON.parse(data);
    console.log('Informações do usuário:');
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log(`Email: ${usuario.email}`);
  } catch (erroParse) {
    console.error('Erro ao converter JSON:', erroParse);
  }
});
