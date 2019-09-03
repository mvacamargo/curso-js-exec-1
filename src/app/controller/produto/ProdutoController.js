const db = require('../../../config/database');

const CategoriaProdutoDAO = require('../../dao/categoriaProduto/CategoriaProdutoDAO')
const ProdutoDAO = require('../../dao/produto/ProdutoDAO')

class ProdutoController {

    formListaProduto() {
        return function (req, res) {
            const categoriaProdutoDAO = new CategoriaProdutoDAO(db);
            categoriaProdutoDAO.selectAll(function (error, resultados) {
                console.log(resultados);
                res.marko(
                    require('../../view/produto/produtoList.marko'),
                    { categorias: resultados }
                );
            });
        };
    }

    buscaProdutoPorCategoria() {
        return function (req, res) {
            const idCatProd = req.params.idCatProd;
            const produtoDAO = new ProdutoDAO(db);
            produtoDAO.selectAllByCategoria(idCatProd, function (error, resultados) {
                console.log(resultados);
                return resultados;
            });
        };
    }

}

module.exports = ProdutoController;