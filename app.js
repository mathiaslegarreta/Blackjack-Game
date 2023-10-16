let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let player = {
    name: "Mathias",
    chips: 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Resultado: " + sum;
    cardsEl.textContent = "Cartas: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
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
    if (isAlive === true && hasBlackjack === false) {

        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard)
        console.log(cards);

        renderGame()
    }
}




