var main = function () {
    "use strict"

    $(".comment-input button").on("click", function (event){
        var $new_comment;

        if ($(".comment-input input").val() !== ""){;

           $new_comment = $("<p>").text($(".comment-input input").val());
            
           /* Preparando para fazer um fade */
           $new_comment.hide();

           $(".comments").append($new_comment);

           /* Apresentando o Fade */
           $new_comment.fadeIn();

           /* Fazer a limpeza da caixa de entrada */
           $(".comment-input input").val("");
        }
    });
};

$(document).ready(main);