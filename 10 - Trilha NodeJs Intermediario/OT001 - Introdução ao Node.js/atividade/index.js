import axios from 'axios';
import chalk from 'chalk';

console.log("Bem-vindo ao Node.js!");

function somarComCallback(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

somarComCallback(5, 7, (resultado) => {
  console.log(`Resultado da soma com callback: ${resultado}`);
});

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('Resposta da API:', response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer requisição:', error);
  });

setTimeout(() => {
  console.log("Este é um exemplo de código que será executado após 3 segundos.");
}, 3000);

console.log(chalk.red('ERRO!!!'));
