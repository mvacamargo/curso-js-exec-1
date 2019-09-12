class ProdutosDAO {

    constructor(db) {
        this._db = db;
    }

    selectAllByCategoria(idCatProd) {
        return new Promise((resolve, reject) => {
            var sqlCons = "SELECT * FROM PRODUTO AS a INNER JOIN CATEGORIAPRODUTO AS b ON a.idCatProd = b.IdCatProd WHERE b.idCatProd = " + idCatProd + " ORDER BY a.descProd";
            console.log(sqlCons);
            this._db.query(sqlCons, function (erro, resultado) {
                if (erro) {
                    console.log(erro);
                    return reject('PRODUTO - ALL BY CATEGORIA - ERRO!');
                }
                return resolve(resultado);
            });
        });
    }

    selectById(idProd) {
        return new Promise((resolve, reject) => {
            var sqlCons = "SELECT * FROM PRODUTO AS a INNER JOIN CATEGORIAPRODUTO AS b ON a.idCatProd = b.IdCatProd WHERE a.idProd = " + idProd + " ORDER BY a.descProd";
            console.log(sqlCons);
            this._db.query(sqlCons, function (erro, resultado) {
                if (erro) {
                    console.log(erro);
                    return reject('PRODUTO - BY ID - ERRO!');
                }
                return resolve(resultado);
            });
        });
    }

}

module.exports = ProdutosDAO;