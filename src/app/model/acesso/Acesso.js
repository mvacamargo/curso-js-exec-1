const { check } = require('express-validator');

class Acesso {
  static validacoesFormAcesso() {
    return [
      check('login').isLength({ min: 1 }).withMessage('O campo LOGIN deve ser preenchido!'),
      check('senha').isLength({ min: 10 }).withMessage('O campo SENHA deve conter 10 caracteres!')
    ];
  }
}

module.exports = Acesso;