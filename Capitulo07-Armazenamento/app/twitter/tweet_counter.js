var ntwitter = require("ntwitter"),
    redis = require("redis"), // Faz o require do módulo redis
    credentials = require("./credentials.json"),
    redisClient,
    twitter;

    // Declara  um objetos counts para armazenar os contadores
    counts = {};

    // Configura o nosso objeto twitter
    twitter = ntwitter(credentials);

    // Cria um cliente para se conectar ao Redis
    redisClient = redis.createClient();

    // Inicializa os nossos contadores
    counts.awesome = 0;

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
                    // incrementa a chave no cliente
                    redisClient.incr("awesome");

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
