function diceOne() {
    let colour1 = document.getElementById("dice1Text");
    let text1 = document.getElementById("dice1Text");
    colour1.style.backgroundColor = "#BDB76B";
    diceResult = (Math.floor(Math.random() * 10) + 1);
    if (diceResult == 0) {
        text1.innerText = "You rolled a " + diceResult + "! No luck. Roll again!";
        colour1.style.backgroundColor = "#BDB76B";
    }
    if (diceResult > 0 && diceResult < 3) {
        text1.innerText = "You rolled a " + diceResult + "! Not bad. Try again!";
        colour1.style.backgroundColor = "#BDB76B";
    }
    if (diceResult > 2 && diceResult < 6) {
        text1.innerText = "You rolled a " + diceResult + "! Close! Keep rolling!";
        colour1.style.backgroundColor = "#BDB76B";
    }
    if (diceResult == 6) {
        text1.innerText = "You rolled a " + diceResult + "! Winner!";
        colour1.style.backgroundColor = "rgba(7, 213, 7, 0.92)";
    }
}

function diceTwo() {
    let colour2 = document.getElementById("dice2Text");
    let text2 = document.getElementById("dice2Text");
    colour2.style.backgroundColor = "#BDB76B";
    diceResult = (Math.floor(Math.random() * 10) + 1);
    if (diceResult == 0) {
        text2.innerText = "You rolled a " + diceResult + "! No luck. Roll again!";
        colour2.style.backgroundColor = "#BDB76B";
    }
    if (diceResult > 0 && diceResult < 6) {
        text2.innerText = "You rolled a " + diceResult + "! Not bad. Try again!";
        colour2.style.backgroundColor = "#BDB76B";
    }
    if (diceResult > 5 && diceResult < 10) {
        text2.innerText = "You rolled a " + diceResult + "! Close! Keep rolling!";
        colour2.style.backgroundColor = "#BDB76B";
    }
    if (diceResult == 10) {
        text2.innerText = "You rolled a " + diceResult + "! Winner!";
        colour2.style.backgroundColor = "rgba(7, 213, 7, 0.92)";
    }
}
