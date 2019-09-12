class CategoriaProdutoDAO {

    constructor(db) {
        this._db = db;
    }

    selectAll() {
        return new Promise((resolve, reject) => {
            var sqlCons = "SELECT * FROM CATEGORIAPRODUTO AS a ORDER BY a.descCatProd";
            console.log(sqlCons);
            this._db.query(sqlCons, function (erro, resultado) {
                if (erro) {
                    console.log(erro);
                    return reject('CATEGORIA - ALL - ERRO!');
                }
                return resolve(resultado);
            });
        });
    }
}

module.exports = CategoriaProdutoDAO;