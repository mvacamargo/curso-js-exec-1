const db = require('../../../config/database');

const CategoriaProdutoDAO = require('../../dao/categoriaproduto/CategoriaProdutoDAO')

module.exports = (app) => {

    app.get('/categorias', function (req, res) {
        const categoriaprodutoDAO = new CategoriaProdutoDAO(db);
        categoriaprodutoDAO.selectAll(function (error, dados) {
            res.marko(
                require(''), {
                    dados: dados
                }
            );
        });
    })

}