var main = function () {
    "use strict";

    // Cria e oculta o nosso conteúdo ba forma de uma div
    var $content = $("<div>Hello World!</div>").hide();
    var $moreContent = $("<div>GoodBye World!</div>").hide();

    // Adiciona o conteúdo ao elemento body
    $("body").append($content);

    // Desliza o conteúdo para baixo durante 2 segundos
    // e então execute a callback que 
    // contém o segundo conteúdo
    $content.slideDown(2000, function(){
        // Adiciona o segundo conteúdo do body
        $("body").append($moreContent);

        // Faz o fade in do segundo conteúdo
        $moreContent.fadeIn();
    });
};

$(document).ready(main);