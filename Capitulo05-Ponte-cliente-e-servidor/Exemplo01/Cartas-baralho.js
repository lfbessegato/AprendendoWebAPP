// Cria um array vazio
var cards = {};

// Insere o dois de copas no array
cards.push({"rank": "two", "suit":"hearts"});
cards.push({"rank": "ace", "suit":"spades"});
cards.push({"rank": "five", "suit":"spades"});
cards.push({"rank": "king", "suit":"clubs"});
cards.push({"rank": "seven", "suit":"diamonds"});

// Exibe a primeira e a terceira cartas da mão
console.log(cards[0]);

console.log(cards[2]);

