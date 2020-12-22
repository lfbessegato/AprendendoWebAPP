var ntwitter = require("ntwitter"),
    redis = require("redis"), // Faz o require do módulo redis
    credentials = require("./credentials.json"),
    redisClient,
    counts = {},
    twitter;

    // Configura o nosso objeto twitter
    twitter = ntwitter(credentials);

    // Cria um cliente para se conectar ao Redis
    redisClient = redis.createClient();

    // a callBack recebe dois argumentos
    awesomeCount = 0;
    redisClient.get("awesome", function (err, awesomeCount){
        
        // Verifica para certificar-se de que não há nenhum erro
        if (err !== null) {
            console.log("ERROR: " + err);
            // Sai da função
            return;
        }

    
    })

    // Inicializa o nosso contador com a versão inteira do valor armazenado
    // no Redis, ou com 0 caso o valor não esteja definido
    counts.awesome = parseInt(awesomeCount, 10) || 0;

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
