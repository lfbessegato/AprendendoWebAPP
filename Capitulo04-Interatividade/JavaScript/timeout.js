// Este é um evento Jquery que executa a callback
// quando o DOM estiver pronto. Neste exemplo, estamos usando 
// uma função anônima em vez de enviar a função
// principal como argumento.

$(document).ready(function () {
    console.log("this will print when the document is ready.");
});

// Esta é uma função pronta para do JavaScript que executa 
// após o número especificada de milisegundos ter passado.

setTimeout(function(){
    console.log("This will print after 3 seconds");
}, 3000);

// Isso será exibido antes de tudo o mais, embora esteja no final.
console.log("This will print first.");
