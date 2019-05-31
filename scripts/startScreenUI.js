

function startScreen()
{
	if(!gameHasStarted)
	{
		if(gameMouse.xLocation >= WIDTH/2 - 100 && gameMouse.xLocation <= WIDTH/2 + 100 && gameMouse.yLocation >= HEIGHT/2 - 100 && gameMouse.yLocation <= HEIGHT/2)
		{
			ctx.fillStyle = "blue";
			ctx.fillRect(WIDTH/2 - 100, HEIGHT/2 - 100, 200, 100);
			
			ctx.fillStyle = "white";
			ctx.font = "30px Arial";
			ctx.fillText("Start Game", WIDTH/2 - 75, HEIGHT/2 - 50, 200);
			
			if(clickPos[0] >= WIDTH/2 - 100 && clickPos[0] <= WIDTH/2 + 100 && clickPos[1] >= HEIGHT/2 - 100 && clickPos[1] <= HEIGHT/2)
			{
				gameHasStarted = true;
			}
		}
		else
		{
			ctx.fillStyle = "grey";
			ctx.fillRect(WIDTH/2 - 100, HEIGHT/2 - 100, 200, 100);
			
			ctx.fillStyle = "black";
			ctx.font = "30px Arial";
			ctx.fillText("Start Game", WIDTH/2 - 75, HEIGHT/2 - 50, 200);
		}

		
	}
}