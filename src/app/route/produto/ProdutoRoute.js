const ProdutoController = require('../../controller/produto/ProdutoController');
const produtoController = new ProdutoController();

module.exports = (app) => {

    app.get('/produtos', produtoController.listaCategoria())

    app.get('/produtos/busca/categoria/:idCatProd', produtoController.buscaProdutoPorCategoria())

    app.get('/produtos/busca/produto/:idProd', produtoController.buscaProdutoPorId())

}