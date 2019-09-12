class UsuarioDAO {

    constructor(db) {
        this._db = db;
    }

    insert(usuario) {
        return new Promise((resolve, reject) => {
            var sqlInsere = "INSERT INTO USUARIOS (nomeUsr, emailUsr, loginUsr, senhaUsr) VALUES ('" + usuario.nome + "','" + usuario.email + "','" + usuario.login + "','" + usuario.senha + "')";
            console.log(sqlInsere);
            this._db.query(sqlInsere, function (erro) {
                if (erro) {
                    console.log(erro);
                    return reject('USUÁRIO - INCLUSÃO - ERRO!');
                }
                return resolve('OK');
            });
        });
    }

    selectByLoginAndSenha(usuario) {
        return new Promise((resolve, reject) => {
            var sqlCons = "SELECT * FROM USUARIOS WHERE loginUsr = '" + usuario.login + "' AND senhaUsr = '" + usuario.senha + "'";
            console.log(sqlCons);
            this._db.query(sqlCons, function (erro, resultado) {
                if (erro) {
                    console.log(erro);
                    return reject('USUÁRIO - ACESSO - ERRO!');
                }
                return resolve(resultado);
            });
        });
    }

}

module.exports = UsuarioDAO;