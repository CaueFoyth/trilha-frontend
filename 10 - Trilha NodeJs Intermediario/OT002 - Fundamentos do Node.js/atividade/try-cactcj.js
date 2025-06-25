const fs = require('fs');

try {
  const data = fs.readFileSync('arquivo_inexistente.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Erro ao acessar o arquivo:', err.message);
}