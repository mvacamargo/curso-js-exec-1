// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/aula3$1.0.0/src/app/views/clientes/inclusaoClientes.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Cadastro de Clientes</h1><form action=\"/clientes\" method=\"post\"><input type=\"hidden\" id=\"id\" name=\"id\"><table width=\"30%\"><tr><td><label for=\"nome\">Nome do Cliente:</label></td><td><input type=\"text\" id=\"nome\" name=\"nome\" size=\"20\"></td></tr><tr><td><label for=\"cpf\">CPF do Cliente:</label></td><td><input type=\"text\" id=\"cpf\" name=\"cpf\" size=\"11\"></td></tr><tr><td><label for=\"data\">Data Aniversario:</label></td><td><input type=\"text\" id=\"niver\" name=\"niver\" size=\"10\"></td></tr><tr><td><label for=\"email\">Email:</label></td><td><input type=\"text\" id=\"email\" name=\"email\" size=\"40\"></td></tr></table><br><input type=\"submit\" value=\"Enviar Dados\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/aula3$1.0.0/src/app/views/clientes/inclusaoClientes.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
