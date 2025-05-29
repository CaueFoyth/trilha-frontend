var fs = require('fs');

fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err) {
    if (err) throw err;
    console.log('Arquivo criado com sucesso!');
})