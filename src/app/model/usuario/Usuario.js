const { check } = require('express-validator');

class Usuario {
    static validacoesFormUsuario() {
        return [
            check('nome').isLength({ min: 1 }).withMessage('O campo NOME deve ser preenchido!'),
            check('email').isLength({ min: 1 }).withMessage('O campo E-MAIL deve ser preenchido!'),
            check('email').isEmail().withMessage('O campo E-MAIL deve conter um endereço válido!'),
            check('login').isLength({ min: 1 }).withMessage('O campo LOGIN deve ser preenchido!'),
            check('senha').isLength({ min: 10 }).withMessage('O campo SENHA deve conter 10 caracteres!')
        ];
    }
}

module.exports = Usuario;