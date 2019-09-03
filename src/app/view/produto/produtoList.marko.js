// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/exec1$1.0.0/src/app/view/produto/produtoList.marko",
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

  out.w("<html><head><script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script><script>\r\n    function carregaProdutos(){\r\n      alert($(\"#cmbCategoria option:selected\").val());\r\n      $.ajax({\r\n        method: \"GET\",\r\n        url: \"http://localhost:3000/produto/\" + $(\"#cmbCategoria option:selected\").val()        \r\n      }).done(function( data ) {\r\n        alert( \"Data Saved: \" + data );\r\n      });\r\n    }\r\n    </script></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>PRODUTO</h1><label>Categorias</label><select id=\"cmbCategoria\" onchange=\"carregaProdutos()\">");

  var $for$0 = 0;

  marko_forEach(data.categorias, function(categoria) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<option" +
      marko_attr("value", "" + categoria.idCatProd) +
      ">" +
      marko_escapeXml(categoria.descCatProd) +
      "</option>");
  });

  out.w("</select><label>Produtos</label><select id=\"cmbProduto\"></select>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "11");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/exec1$1.0.0/src/app/view/produto/produtoList.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
