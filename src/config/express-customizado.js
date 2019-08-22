const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/estatico', express.static('src/app/views/clientes'));

const rotasIndex = require('../app/rotas/indexRota.js');
rotasIndex(app);
const rotasUsuarios = require('../app/rotas/usuarios/usuariosRota.js');
rotasUsuarios(app);
const rotasCategoriaProdutos = require('../app/rotas/categoriaproduto/categoriaprodutoRota.js');
rotasCategoriaProdutos(app);
const rotasProdutos = require('../app/rotas/produtos/produtosRota.js');
rotasProdutos(app);

require('marko/node-require').install();
require('marko/express');

module.exports = app;