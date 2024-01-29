var randomNumber1 = Math.round(Math.random() * 6);
var randomNumber2 = Math.round(Math.random() * 6);

if (randomNumber1 == 1) {
document.getElementsByClassName("img1").setAttribute("src", "./images/dice1.png")
} else if (randomNumber1 == 2) {
    document.getElementsByClassName("img1").setAttribute("src", "./images/dice2.png")
} else if (randomNumber1 == 3) {
    document.getElementsByClassName("img1").setAttribute("src", "./images/dice3.png")
} else if (randomNumber1 == 4) {
    document.getElementsByClassName("img1").setAttribute("src", "./images/dice4.png")
} else if (randomNumber1 == 5) {
    document.getElementsByClassName("img1").setAttribute("src", "./images/dice5.png")
} else if (randomNumber1 == 6) {
    document.getElementsByClassName("img1").setAttribute("src", "./images/dice6.png")
}