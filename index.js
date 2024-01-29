var player1name = prompt("Player 1 name:")
var player2name = prompt("Player 2 name:")
document.getElementById("p1").innerHTML=player1name
document.getElementById("p2").innerHTML=player2name

function diceGame(){
    var dice1 = Math.floor((Math.random() * 6) + 1 );
    var dice2 = Math.floor((Math.random() * 6) + 1);
    
    var dice1img = "./images/dice"+dice1+".png";
    var dice2img = "./images/dice"+dice2+".png";
 
    document.getElementsByClassName("img1")[0].setAttribute("src", dice1img);
    document.getElementsByClassName("img2")[0].setAttribute("src", dice2img);
 
    if (dice1 > dice2) {
        document.getElementsByClassName("result")[0].innerHTML = player1name + " won!"
    } else if (dice2 == dice1){
        document.getElementsByClassName("result")[0].innerHTML = "Draw!"
    } else {
        document.getElementsByClassName("result")[0].innerHTML = player2name + " won!"
    }
}