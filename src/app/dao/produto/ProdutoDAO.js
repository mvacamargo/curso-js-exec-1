class ProdutosDAO {

    constructor(db) {
        this._db = db;
    }

    selectAllByCategoria(idCatProd, callback) {
        this._db.query(
            "SELECT * FROM PRODUTO AS a INNER JOIN CATEGORIAPRODUTO AS b ON a.idCatProd = b.IdCatProd WHERE b.idCatProd = " + idCatProd + " ORDER BY a.descProd", (erro, resultados) => {
                callback(erro, resultados);
            });
    }

}

module.exports = ProdutosDAO;