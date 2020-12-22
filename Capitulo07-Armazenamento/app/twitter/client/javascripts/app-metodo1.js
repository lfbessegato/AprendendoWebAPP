var main = function () {
    "use strict";

    $.getJSON("/counts.json", function (wordCounts){
        // Agora, "WordCounts" será o objeto 
        // Retornado pela rota counts.json
        // definida no Express
        console.log(wordCounts);
    });
}

$(document).ready(main)