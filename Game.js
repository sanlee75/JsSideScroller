var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var xPos=0;
var yPos=4;
var position =[0,0]
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);






var map=[
		 [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
		 [0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,3,0,0],
		 [0,0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,1,0,0,3,0,0,0,0,0],
		 [1,0,3,0,0,0,3,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
		 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
		 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
		 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
		 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
		 [1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
		 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
		 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
		 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],


		 ];
var cam=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],


		 ];

function moveCamera(){
		for( y = 0; y<20;y++)//breedte -1
	{
		for( x = 0; x<12;x++)//hoogte -1;
	{
		cam[x][y] = map[x][y+xPos];

	}
	}

	}

function drawChar(){
	drawTile(10,10,"#ff0000")

}


function drawMap(){
	for( y = 0; y<20;y++)//breedte -1
	{
		for( x = 0; x<12;x++)//hoogte -1;
	{

	if(cam[x][y]==1){

		drawTile(y,x,"#00ff00");
	}

			if(cam[x][y]==3){

		drawTile(y,x,"#00ffff");
	}
	}

	}
}
function drawTile( x,  y,color) {
ctx.beginPath();
var width =canvas.width/20
var height = canvas.height/12;
ctx.rect(x*width, y*height, width, height);
ctx.fillStyle = color;
ctx.fill();
ctx.closePath();
}

function Render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	moveCamera();
    drawMap();
	charMovement();
	drawChar();
}
function charMovement(){
	if(rightPressed==true)
	{
		if(cam[10][11]==1){

		}else{

			xPos++;

		}



	}
	if(leftPressed==true){
		if(cam[10][9]==1){

		}else{
				xPos--;
		}

	}

}
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;


    }
	 else if(e.keyCode == 38) {
        upPressed = true;

    }
    else if(e.keyCode == 37) {
        leftPressed = true;

    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;

    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
		else if(e.keyCode == 38) {
        upPressed = false;

    }
}

setInterval(Render, 20);
