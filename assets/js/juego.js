/*
2C = Two of Clubs (Treboles)
2D = Two of Diamonds (Diamantes)
2H = Two of Hearts (Corazones)
2S = Two of Spades (Espadas)
*/

// Libreria https://underscorejs.org/ (se puede usar mediante un CDN (Content Delivery Network) en linea)

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

// Esta funcion crea un nuevo deck
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};

crearDeck();

// Esta funcion me permite tomar UNA carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck.";
  }

  const carta = deck.pop();

  return "2C";
};