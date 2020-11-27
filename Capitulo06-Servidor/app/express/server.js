var express = require("express"),
    http = require("http"),
    app;

// Cria o nosso servidor HTTP baseado no Express
// e faça-o ficar ouvindo na porta 3000

app = express();
http.createServer(app).listen(3000);


// Define as nossas rotas
app.get("/", function (req, res) {
	res.send("This is the root route!");
});

app.get("/hello", function (req, res) {
	res.send("Hello World!");
});

app.get("/goodbye", function(req, res) {
	res.send("Goodbye World!");
});