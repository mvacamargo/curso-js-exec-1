// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/aula3$1.0.0/src/app/views/clientes/listagemClientes.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Lista dos Clientes com Node.js</title><style>\r\n      #cabecalho{\r\n        width: 80%;\r\n        margin: 20px auto;\r\n      }\r\n      #cabecalho a{\r\n        padding: 10px;\r\n        background-color: #000;\r\n        color: #fff;\r\n        text-decoration: none;\r\n      }\r\n      #cabecalho a:hover{\r\n        background-color: #fff;\r\n        color: #000;        \r\n      }\r\n      #clientes{\r\n        width: 80%;\r\n        margin: 20px auto;\r\n        border: 1px solid #ddd;\r\n      }\r\n      #clientes tr td{\r\n        border: 1px solid #ddd;\r\n        padding: 5px;\r\n      }\r\n      #clientes tr td a{\r\n        padding: 5px;\r\n        margin: 0 5px;\r\n        background-color: #000;\r\n        color: #fff;\r\n        text-decoration: none;\r\n      }\r\n      #clientes tr td a:hover{\r\n        background-color: #fff;\r\n        color: #000;        \r\n      }\r\n    </style></head><body>");

  component_globals_tag({}, out);

  out.w("<div id=\"cabecalho\"><h1>Listagem de CLIENTES</h1><a href=\"/clientes/inclusao\">+ Novo</a></div><div><table width=\"100%\" id=\"clientes\" style=\"border: 1px solid #ddd;\"><tr><td>ID</td><td>NOME</td><td>CPF</td><td>DATA DE ANIVERSÁRIO</td><td>EMAIL</td><td></td></tr>");

  var $for$0 = 0;

  marko_forEach(data.clientes, function(cliente) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "cliente_" + cliente.idClie) +
      "><td>" +
      marko_escapeXml(cliente.idClie) +
      "</td><td>" +
      marko_escapeXml(cliente.nomeClie) +
      "</td><td>" +
      marko_escapeXml(cliente.cpfClie) +
      "</td><td>" +
      marko_escapeXml(cliente.dataNiverClie) +
      "</td><td>" +
      marko_escapeXml(cliente.emailClie) +
      "</td><td><a" +
      marko_attr("href", "/clientes/" + cliente.idClie) +
      ">Editar</a><a href=\"#\"" +
      marko_attr("data-ref", "" + cliente.idClie) +
      " data-type=\"remocao\">Excluir</a></td></tr>");
  });

  out.w("</table><script src=\"/estatico/removeCliente.js\"></script></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/aula3$1.0.0/src/app/views/clientes/listagemClientes.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
