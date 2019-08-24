const db = require('../../../config/database');

const UsuarioDAO = require('../../dao/usuario/UsuarioDAO')

class UsuarioController {

    formCadUsuario() {
        return function (req, res) {
            res.marko(require('../../view/usuario/usuarioNew.marko'));
        }
    }

    cadUsuario() {
        return function (req, res) {
            console.log(req.body);
            const usuarioDAO = new UsuarioDAO(db);
            usuarioDAO.insert(req.body)
                .then(res.redirect('/'))
                .catch(erro => console.log(erro));
        }
    }

    buscaUsuarioPorLoginESenha() {
        return function (req, res) {
            console.log(req.body);
            const usuarioDAO = new UsuarioDAO(db);
            usuarioDAO.selectByLoginAndSenha(req.body)
                .then(res.redirect('?'))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = UsuarioController;