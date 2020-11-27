var express = require("express"),
    http = require("http"),
    app = express();

// Cria um diretório de arquivos estáticos a ser usado para o roteamento default;

// veja também a observação mais adiante a respeito do Windows
app.use(express.static(__dirname + "/client"));

// cria o nosso servidor HTTP baseado no Express
http.createServer(app).listen(3000);

// define as nossas rotas
app.get("/", function (req, res) {
	res.send("This is the root route!");
});

app.get("/hello", function (req, res){
	res.send("Hello World!");
});

app.get("/goodbye", function (req, res){
	res.send("Goodbye World!");
});

app.get("/index.html", function (req, res){
	res.send("<html><head></head><body><h1>Hello World!</h1></body></html>");
});



