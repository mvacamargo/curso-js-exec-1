const db = require('../../../config/database.js');

const ProdutosDAO = require('../../bd/produtos/produtosDAO.js')

module.exports = (app) => {

    app.get('/produtos', function (req, res) {
        const produtosDAO = new ProdutosDAO(db);
        produtosDAO.selectAllByCategoria(idCategoria, function (error, dados) {
            res.marko(
                require(''), {
                    dados: dados
                }
            );
        });
    })

}