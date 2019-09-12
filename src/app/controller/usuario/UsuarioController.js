const db = require('../../../config/database');

const UsuarioDAO = require('../../dao/usuario/UsuarioDAO')

const { validationResult } = require('express-validator');

class UsuarioController {

    formCadUsuario() {
        return function (req, res) {
            res.marko(require('../../view/usuario/usuarioNew.marko'));
        }
    }

    cadUsuario() {
        return function (req, res) {
            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                return res.marko(
                    require('../../view/usuario/usuarioNew.marko'),
                    {
                        errosValidacao: erros.array()
                    });
            } else {
                console.log(req.body);
                const usuarioDAO = new UsuarioDAO(db);
                usuarioDAO.insert(req.body)
                    .then(function (result) {
                        console.log(result);
                        res.redirect('/');
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }

    buscaUsuarioPorLoginESenha() {
        return function (req, res) {
            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                return res.marko(
                    require('../../view/index.marko'),
                    {
                        errosValidacao: erros.array()
                    });
            } else {
                console.log(req.body);
                const usuarioDAO = new UsuarioDAO(db);
                usuarioDAO.selectByLoginAndSenha(req.body)
                    .then(function (result) {
                        console.log(result);
                        if (result.length != 0) {
                            res.redirect('/produtos');
                        } else {
                            res.redirect('/');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
}

module.exports = UsuarioController;