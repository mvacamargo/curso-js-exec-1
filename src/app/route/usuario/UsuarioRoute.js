const UsuarioController = require('../../controller/usuario/UsuarioController');
const usuarioController = new UsuarioController();

const Usuario = require('../../model/usuario/Usuario');
const Acesso = require('../../model/acesso/Acesso');

module.exports = (app) => {

    app.get('/usuario/new', usuarioController.formCadUsuario())

    app.post('/usuario', Usuario.validacoesFormUsuario(), usuarioController.cadUsuario())

    app.post('/usuario/login', Acesso.validacoesFormAcesso(), usuarioController.buscaUsuarioPorLoginESenha())

}