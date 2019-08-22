const db = require('../../../config/database.js');

const UsuariosDAO = require('../../bd/usuarios/usuariosDAO.js')

module.exports = (app) => {

    app.get('/usuarios/new', function (req, res) {
        res.marko(require('../../views/usuarios/usuariosNew.marko'));
    })

    app.post('/usuarios', function (req, res) {
        console.log(req.body);
        const usuarioDAO = new UsuarioDAO(db);
        usuarioDAO.insert(req.body)
            .then(res.redirect('?'))
            .catch(erro => console.log(erro));
    })

    app.post('/usuarios/login', function (req, res) {
        console.log(req.body);
        const usuarioDAO = new UsuarioDAO(db);
        usuarioDAO.selectByLoginAndSenha(req.body)
            .then(res.redirect('?'))
            .catch(erro => console.log(erro));
    })

}