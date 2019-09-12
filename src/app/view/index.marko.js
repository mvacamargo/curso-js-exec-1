// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/exec1$1.0.0/src/app/view/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"pt-br\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Primeiro exercício do Curso de Javascript.</title><script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/estatico/css/default.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container col-md-6 col-md-offset-3\"><div class=\"row\"><h3 class=\"padding-15\">Acesso ao Sistema</h3></div><div class=\"row\"><ul>");

  var $for$0 = 0;

  marko_forEach(data.errosValidacao, function(erro) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<li>" +
      marko_escapeXml(erro.msg) +
      "</li>");
  });

  out.w("</ul></div><div class=\"row\"><form action=\"/usuario/login\" method=\"post\" class=\"col-md-12\"><div class=\"form-group\"><label for=\"login\">Login</label><input type=\"text\" class=\"form-control\" id=\"login\" name=\"login\" maxlength=\"10\" autofocus></div><div class=\"form-group\"><label for=\"senha\">Senha</label><input type=\"password\" class=\"form-control\" id=\"senha\" name=\"senha\" maxlength=\"10\"></div><button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Acessar</button></form></div><div class=\"row\"><a href=\"/usuario/new\" class=\"btn btn-lg btn-default btn-block\">Cadastrar Acesso</a></div></div>");

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
    id: "/exec1$1.0.0/src/app/view/index.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
