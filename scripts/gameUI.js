

function drawUI(player)
{
	//Health Bar
	ctx.beginPath();
	ctx.rect(WIDTH*.8, 10, 50, 15);
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.rect(WIDTH*.8, 10, player.health/2, 15);
	ctx.fill();
	ctx.closePath();

	//Enemies Killed Counter
	ctx.fillStyle = "black";
	ctx.font = "15px arial";
	ctx.fillText("Enemies Killed: " + enemiesKilled, WIDTH*.7, 25, 100);

}