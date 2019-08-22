const db = require('../../../config/database.js');

const CategoriaProdutoDAO = require('../../bd/categoriaproduto/categoriaprodutoDAO.js')

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