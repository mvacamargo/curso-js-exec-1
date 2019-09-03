class CategoriaProdutoDAO {

    constructor(db) {
        this._db = db;
    }

    selectAll(callback) {
        var sqlCons = "SELECT * FROM CATEGORIAPRODUTO AS a ORDER BY a.descCatProd";
        console.log(sqlCons);
        this._db.query(sqlCons, (erro, resultados) => {
            callback(erro, resultados);
        });
    }

}

module.exports = CategoriaProdutoDAO;