import express from 'express';
import colecaoUf from './dados/dados.js';

const app = express();

const buscarUfsPorNome = (nome) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nome.toLowerCase()));
};

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;
    if (resultado.length > 0) {
        res.status(200).json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada com o critério de busca fornecido." });
    }
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