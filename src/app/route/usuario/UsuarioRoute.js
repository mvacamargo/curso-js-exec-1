const UsuarioController = require('../../controller/usuario/UsuarioController');
const usuarioController = new UsuarioController();

module.exports = (app) => {

    app.get('/usuario/new', usuarioController.formCadUsuario())

    app.post('/usuario', usuarioController.cadUsuario())

    app.post('/usuario/login', usuarioController.buscaUsuarioPorLoginESenha())

}