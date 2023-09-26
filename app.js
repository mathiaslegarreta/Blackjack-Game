let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let thirdCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Resultado: " + sum;
    cardsEl.textContent = "Cartas: " + cards[0] + " - " + cards[1];
    if (sum <= 20) {
        message = "Quieres otra carta?";
    } else if (sum === 21) {
        message = "Felicitaciones, hiciste Blackjack!";
        hasBlackjack = true;
    } else {
        message = "Perdiste maquinola";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    messageEl.textContent = "Entregandote una nueva carta"

    sum += thirdCard;

    renderGame()



}