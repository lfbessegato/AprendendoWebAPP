var ntwitter = require("ntwitter"),
    credentials = require("./credentials.json"),
    twitter;
    counts = {};

    counts.awesome = 0;
    counts.cool = 0;
    counts.rad = 0;
    counts.gnarly = 0;
    counts.groovy = 0;


    // Configura o nosso objeto twitter
    twitter = ntwitter(credentials);

    // Configura o nosso stream do twitter com três parâmetros
    // separados por vírgulas

    twitter.stream(
        // o primeiro parâmetro corresponde a uma string
        "statuses/filter",

        // o segundo parâmetro é um objeto que contém um array
        { "track": ["awesome", "cool", "rad", "gnarly", "groovy"]}, 

        // O terceiro parâmetro é nossa callback, a ser chamada quando a 
        // stream for criada
        function(stream) {
            stream.on("data", function(tweet){
                if (tweet.text.indexOf("awesome") > -1 ){
                    // incrementa o contador de awesome
                    counts.awesome = counts.awesome + 1;
                }
            });
        }
    );

    // exibe o contador de awesome a cada 3 segundos
    setInterval(function() {
        console.log("awesome: " + counts.awesome);
    }, 3000);

    module.exports = counts;
