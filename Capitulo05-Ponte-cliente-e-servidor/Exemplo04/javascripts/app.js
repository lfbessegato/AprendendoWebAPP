var main = function() {
    "use strict";

    console.log("Hello World!")

    // getJSON efetua até mesmo o parse do JSON para nós, portamto não é 
    // necessário chamar JSON.parse
    $.getJSON("cards/aceOfSpades.json", function (card) {
        // cria um elemento para armazenar a carta
        var $cardParagraph = $("<p>");

        // Adiciona texto ao elemento parágrafo
        $cardParagraph.text(card.rank + " of " + card.suit);

        //Adiciona o parágrafo da carta ao main
        $("main").append($cardParagraph);
    });
}
$(document).ready(main);