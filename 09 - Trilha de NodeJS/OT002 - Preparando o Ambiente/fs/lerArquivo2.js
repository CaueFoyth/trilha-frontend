var fs = require('fs');

fs.readFile('novo.txt', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    data += ' 2023'

    fs.writeFile('ArquivoNovoRenomeado.txt', data, function (err) {
        if (err) {
            console.error(err);
            return;
        }
    
        console.log("Arquivo atualizado com sucesso!");
    });
});