const db = require('../../../config/database');

const ProdutosDAO = require('../../dao/produto/ProdutoDAO')

module.exports = (app) => {

    app.get('/produtos', function (req, res) {
        const produtosDAO = new ProdutosDAO(db);
        produtosDAO.selectAllByCategoria(idCategoria, function (error, dados) {
            res.marko(
                require('./node_modules'), {
                    dados: dados
                }
            );
        });
    })

}