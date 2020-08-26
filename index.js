// Dice 1 image

var randomnumber1 = Math.floor(Math.random()*6)+1;

var diceimage1 = "images/dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , diceimage1);


// Dice 2 image 

var randomnumber2 = Math.floor(Math.random()*6)+1;

var diceimage2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , diceimage2);

// win or loose conditions

if(randomnumber1 > randomnumber2){
	document.querySelector("h1");
    var heading = document.querySelector("h1");
    heading.innerHTML = "Player 1 Wins";
}else if(randomnumber1 < randomnumber2){
	var heading = document.querySelector("h1");
	heading.innerHTML = "Player 2 Wins";
}else{
	var heading = document.querySelector("h1");
	heading.innerHTML = "Draw";
}

