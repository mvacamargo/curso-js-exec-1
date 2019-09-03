const ProdutoController = require('../../controller/produto/ProdutoController');
const produtoController = new ProdutoController();

module.exports = (app) => {

    app.get('/produtos', produtoController.formListaProduto())

    app.get('/produtos/:idCatProd', produtoController.buscaProdutoPorCategoria())

}