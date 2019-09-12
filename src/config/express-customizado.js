const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/estatico', express.static('src/app/view'));

const indexRoute = require('../app/route/IndexRoute');
indexRoute(app);
const usuarioRoute = require('../app/route/usuario/UsuarioRoute');
usuarioRoute(app);
const produtoRoute = require('../app/route/produto/ProdutoRoute');
produtoRoute(app);

require('marko/node-require').install();
require('marko/express');

module.exports = app;