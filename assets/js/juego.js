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

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");

const divCartasJugador = document.querySelector("#jugador-cartas");
const puntosHTML = document.querySelectorAll("small");

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

  return carta;
};

// Esta funcion me permite saber el valor de una carta
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return (isNaN(valor)) ? (valor === "A") ? 11 : 10 : valor * 1;
};

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${ carta }.png`; 
  imgCarta.classList.add('carta');

  divCartasJugador.append( imgCarta );
});