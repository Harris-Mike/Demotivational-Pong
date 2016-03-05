var counter = 0
var highScore=0;
var canvas;
var ctx;
var Cx = 400;
var	Cy = 250;
var paddleY ;
var gameOverCounter=0;
var meanMessagesArray=[
"Wow! I have seen this bad a losing streak since '87!",
"You set the loser bar to a new standard! All Hail the Loser king!",
"Maybe try a different profession where you aren't so....peasant-like",
"You should get a life coach",
"There's plenty of self-help books available for your disorder",
"Go home. You're drunk.",
"LOOK OUT BEHIND YOU!!!!!!!",
"Did you know that duck's penis is corckscrew shaped?  Like the metaphorical duck penis you're really screwed for this game"
];



window.onload = function(){
	canvas = document.getElementById("MyCanvas");
	paddleY=70;
 ctx = canvas.getContext("2d");
 document.addEventListener("mousemove", mouseMoveHandler, false);
	localStorage.setItem("highscore", 0);
	 localStorage.setItem("gameOver", 0);
	setInterval(paint, 17);
}

//canvas

var barY=190;
var x =30;
var Dx = 2;
var Dy = 2;

function gameOver(){

		
		if (counter > parseInt(localStorage.getItem("highscore"))) {
			 localStorage.setItem("gameOver", 0);
			alert("NEW HIGH SCORE");
  localStorage.setItem("highscore", counter);


		document.getElementById("highScore").innerHTML=localStorage.getItem("highscore");
		Dx = Dx *-1;	
                Cx=Cx+canvas.width/2;	
                        
	}
	else{

			if(parseInt(localStorage.getItem("gameOver"))>=2){
				alert("Times you have made baby Jesus cry : " +gameOverCounter + " \n \n"+ meanMessagesArray[Math.floor(Math.random() * (meanMessagesArray.length))] +"\n \nThanks for playing champ!")
			}
			gameOverCounter++;
			localStorage.setItem("gameOver",gameOverCounter);
			Dx = Dx *-1;
                        Cx=Cx+canvas.width/2;
}                       
counter=0;
}
//use the clear canvas to redraw ball (movement)
function clearCanvas(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	 if(Cx+20  >=canvas.width)
	 	Dx=Dx*-1;
		
	
	if(Cx <= 0){
		gameOver();
		
}

	if(Cy + 20 >= canvas.height)
		Dy = Dy * -1;

	if(Cy - 20 >= canvas.height)
		Dy = Dy * -1;

	// if (Cx - 20 <= 0)
	// 	Dx = Dx * -1;
	if(Cy - 20 <= 0)
		Dy = Dy * -1;
	 if(Cx==40 && (Cy> paddleY&&Cy<paddleY+70) ){
                counter++
                document.getElementById("hitCounter").innerHTML=counter;
	 	Dx=Dx*-1;
	}
}
//collision detection 
// this is where you go to count the ball hitting the bar.  
function paint() {
	
	clearCanvas();

	drawBall();
	drawPaddle();

	barhitball();

}
function mouseMoveHandler(e) {
    var relativeY = e.clientY - canvas.offsetTop;
    if(relativeY > 70 && relativeY < canvas.height) {
        paddleY = relativeY - 70;
    }
}
function drawBall(){
	var x = Cx + Dx;
	var y = Cy + Dy;
	Cx = x;
	Cy = y;
	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.arc(x, y, 8, 0, 2 * Math.PI, false);
	ctx.fill();
	ctx.closePath();
}
function drawPaddle(){
	var c = document.getElementById("MyCanvas");
	ctx.beginPath();
	ctx.fillStyle = "black"
	ctx = c.getContext("2d");
	ctx.strokeRect(x, paddleY, 10, 70);
	ctx.closePath();

}
 
 

 
