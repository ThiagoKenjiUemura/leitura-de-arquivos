const express = require('express');
const arquivos = require('./arquivos');
const rotas = express();

rotas.get('/', arquivos.modificarArquivo);
rotas.post('/', arquivos.alterarArquivo);

module.exports = rotas;
