var main = function () {
    "use strict"
    var addCommentFromInputBox = function () {
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
    };

    /* Chama a função se foi clicado o botão + */
    $(".comment-input button").on("click", function (event){
        addCommentFromInputBox();
    });

    /* chama a função se foi pressionado a tecla */
    $(".comment-input input").on("keypress", function (event){
        /* valida se foi pressionada a <ENTER> */
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);