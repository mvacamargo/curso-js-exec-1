function carregaProdutos(idCatProd) {
    var html = "";
    $.ajax({
        url: "http://localhost:3000/produtos/busca/categoria/" + idCatProd,
        type: "GET",
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    html += "<div class=\"col-sm-6\">";
                    html += "<div class=\"card\">";
                    html += "<div class=\"card-body\">";
                    html += "<a href=\"javascript:;\" onclick=\"carregaProdutoInfo(" + result[i].idProd + ")\" class=\"btn btn-primary btn-block\">" + result[i].descProd + "</a>";
                    html += "</div>";
                    html += "</div>";
                    html += "</div>";
                }
                $("#sec-prod").html(html);
                $("#sec-prod-info").html("<h6 class=\"padding-15\">Sem resultados...</h6>");
            } else {
                $("#sec-prod").html("<h6 class=\"padding-15\">Sem resultados...</h6>");
                $("#sec-prod-info").html("<h6 class=\"padding-15\">Sem resultados...</h6>");
            }
        }
    })
}

function carregaProdutoInfo(idProd) {
    var html = "";
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/produtos/busca/produto/" + idProd,
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                html += "<div class=\"col-sm-6\">";
                html += "<div class=\"card\">";
                html += "<div class=\"card-body\">";
                html += "<h5 class=\"card-title\">" + result[0].descProd + "</h5>";
                html += "<h6 class=\"card-subtitle mb-2 text-muted\">" + result[0].descCatProd + "</h6>";
                html += "<p class=\"card-text\">" + Number(result[0].valorProd).toFixed(2) + "</p>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
                $("#sec-prod-info").html(html);
            } else {
                $("#sec-prod-info").html("<h6 class=\"padding-15\">Sem resultados...</h6>");
            }
        }
    })
}