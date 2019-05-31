/*All Rights Reserved Skyler Moosman*/

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

//resize canvas to fit the window size
/* canvas.height = window.innerHeight - 20;
canvas.width = window.innerWidth - 20; */

var HEIGHT = canvas.height;
var WIDTH = canvas.width;

var gameHasStarted = false;

var enemyCounter = 0;
var enemiesKilled = 0;

var objects = [];

var maxSpeed = 50;
var friction = 20;
var slowSpeedRate = friction/maxSpeed;

var gameMouse = new mouse(0, 0);
var clickPos = [0, 0];

var playerCharacter = new character(2, 100, 25, canvas.width/2, canvas.height/2, 0, 0, 15, 15, "blue", gun);


var playerWeapon = playerCharacter.weapon;

var enemy = new character(2, 100, 25, canvas.width/4, canvas.height/2, 0, 0, 15, 15, "red", gun);
objects.push(enemy);

var enemies = [];


canvas.addEventListener("mousemove", getMousePos);

canvas.addEventListener("mousedown", mouseClickedEvent);

var enemySpawnTimer;
var timerHasBeenStarted = false;


function gameLoop()
{
	ctx.clearRect(0, 0, WIDTH, HEIGHT);

	if(!gameHasStarted)
	{
		playerCharacter.health = 100;
		timerHasBeenStarted = false;
		enemiesKilled = 0;
		enemies = [];
		objects = [];
		playerHasBeenCreated = false;
		startScreen();
	}

	if(gameHasStarted)
	{
		clickPos = [0, 0];
		accelerateObjects(objects);
		handleCollisions(objects);
		movePlayerCharacter();
		for(var i = 0; i < enemies.length; i++)
		{
			useAI(enemies[i]);
		}
		
		renderObjects(objects);
		drawUI(playerCharacter);


		if(!playerHasBeenCreated)
		{
			playerHasBeenCreated = true;
			playerCharacter = new character(2, 100, 25, canvas.width/2, canvas.height/2, 0, 0, 15, 15, "blue", gun);
			playerWeapon = playerCharacter.weapon;
			objects.push(playerCharacter);
			objects.push(playerWeapon);
		}
		if(!timerHasBeenStarted)
		{
			timerHasBeenStarted = true;
			enemySpawnTimer = setInterval(spawnEnemies, 5000);
		}
	}

	if(playerCharacter.health <= 0)
	{
		clearInterval(enemySpawnTimer);
		gameHasStarted = false;
	}

	window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);