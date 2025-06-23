import express from 'express';
import colecaoUf from './dados/dados.js';

const app = express();

app.get('/ufs', (req, res) => {
    res.status(200).json(colecaoUf);
});

app.get('/ufs/:iduf', (req, res) => {
    const idUf = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf

    if (!(isNaN(idUf))) {
        uf = colecaoUf.find(item => item.id === idUf);

        if (!uf){
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida, o ID da UF deve ser um número inteiro.';
    }

    if (uf) {
        res.status(200).json(uf);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});