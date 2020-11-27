var main = function() {
    "use strict";

        // getJSON efetua até mesmo o parse do JSON para nós, portamto não é 
    // necessário chamar JSON.parse
    $.getJSON("cards/aceOfSpades.json", function (card) {
        // exibe a carta no console
        console.log(card);
    })
}
$(document).ready(main);