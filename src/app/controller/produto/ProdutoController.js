const db = require('../../../config/database');

const CategoriaProdutoDAO = require('../../dao/categoriaProduto/CategoriaProdutoDAO')
const ProdutoDAO = require('../../dao/produto/ProdutoDAO')

class ProdutoController {

    listaCategoria() {
        return function (req, res) {
            const categoriaProdutoDAO = new CategoriaProdutoDAO(db);
            categoriaProdutoDAO.selectAll()
                .then(function (result) {
                    console.log(result);
                    res.marko(
                        require('../../view/produto/produtoList.marko'),
                        { categorias: result }
                    );
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    buscaProdutoPorCategoria() {
        return function (req, res) {
            const idCatProd = req.params.idCatProd;
            const produtoDAO = new ProdutoDAO(db);
            produtoDAO.selectAllByCategoria(idCatProd)
                .then(function (result) {
                    console.log(result);
                    res.json(result);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    buscaProdutoPorId() {
        return function (req, res) {
            const idProd = req.params.idProd;
            const produtoDAO = new ProdutoDAO(db);
            produtoDAO.selectById(idProd)
                .then(function (result) {
                    console.log(result);
                    res.json(result);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

}

module.exports = ProdutoController;