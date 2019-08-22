class CategoriaProdutoDAO {

    constructor(db) {
        this._db = db;
    }

    selectAll(callback) {
        this._db.query(
            "SELECT * FROM CATEGORIAPRODUTO AS a ORDER BY a.descCatProd", (erro, resultados) => {
                callback(erro, resultados);
            });
    }

}

module.exports = CategoriaProdutoDAO;