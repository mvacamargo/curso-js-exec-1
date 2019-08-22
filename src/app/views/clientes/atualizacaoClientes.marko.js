// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/aula3$1.0.0/src/app/views/clientes/atualizacaoClientes.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Dados do Clientes selecionado</h1><form action=\"/clientes\" method=\"post\">");

  if (data.clientes.idClie) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", "" + data.clientes.idClie) +
      "></div>");
  }

  out.w("<table width=\"37%\"><tr><td><label for=\"nome\">Nome do Cliente:</label></td><td><input type=\"text\" id=\"nome\" name=\"nome\" size=\"20\"" +
    marko_attr("value", "" + data.clientes.nomeClie) +
    "></td></tr><tr><td><label for=\"cpf\">CPF do Cliente:</label></td><td><input type=\"text\" id=\"cpf\" name=\"cpf\" size=\"11\"" +
    marko_attr("value", "" + data.clientes.cpfClie) +
    "></td></tr><tr><td><label for=\"data\">Data Aniversario (aaaa/mm/dd):</label></td><td><input type=\"text\" id=\"niver\" name=\"niver\" size=\"10\"" +
    marko_attr("value", "" + data.clientes.dataNiverClie) +
    "></td></tr><tr><td><label for=\"email\">Email:</label></td><td><input type=\"text\" id=\"email\" name=\"email\" size=\"40\"" +
    marko_attr("value", "" + data.clientes.emailClie) +
    "></td></tr></table><br><input type=\"submit\" value=\"Enviar Dados\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/aula3$1.0.0/src/app/views/clientes/atualizacaoClientes.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
