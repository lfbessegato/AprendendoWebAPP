var main = function () {
    "use strict";

    var insertCountsIntoDOM = function (counts){ 
        // insira aqui o seu código de manipulação do DOM
        $("p").text("awesome: " + counts.awesome);
    };

    // Verifica o valor dos contadores a cada 5 segundos, 
    // e insere a vesão atualizada no DOM 
    setInterval(function() {
        // Observe que o InsertCountsintoDOM é chamado com 
        // o parâmetro counts quando getJSON retornar
        $.getJSON("/counts.json", insertCountsIntoDOM)
    }, 5000);
 
}

$(document).ready(main)