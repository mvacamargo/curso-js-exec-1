class UsuariosDAO {

    constructor(db) {
        this._db = db;
    }

    insert(usuario) {
        return new Promise((resolve, reject) => {
            var sqlInsere = "INSERT INTO USUARIOS ('nomeUsr', 'emailUsr', loginUsr', 'senhaUsr') VALUES ('" + usuario.nome + "','" + usuario.email + "','" + usuario.login + "','" + usuario.senha + "')";
            console.log(sqlInsere);
            this._db.query(sqlInsere, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('USUÁRIO - INCLUSÃO - ERRO!');
                }
                resolve();
            });
        });
    }

    selectByLoginAndSenha(usuario, callback) {
        var sqlCons = "SELECT * FROM USUARIOS WHERE loginUsr = " + usuario.usuario + " AND senhaUsr = " + usuario.senha;
        console.log(sqlCons);
        this._db.query(sqlCons, (erro, resultados) => {
            callback(erro, resultados);
        });
    }

}

module.exports = UsuariosDAO;