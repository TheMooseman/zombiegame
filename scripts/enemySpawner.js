

function spawnEnemies()
{	
	var verticalSpawn = Math.random();
	var horizontalSpawn = Math.random();
	if(verticalSpawn > .5)
	{
		var newEnemy = new enemyCharacter(1, 100, 10, horizontalSpawn*WIDTH, 0, 0, 0, 15, 15, "red", gun)
		objects.push(newEnemy);
		enemies.push(newEnemy);
		
	}
	if(verticalSpawn < .5)
	{
		var newEnemy = new enemyCharacter(1, 100, 10, horizontalSpawn*WIDTH, HEIGHT, 0, 0, 15, 15, "red", gun)
		objects.push(newEnemy);
		enemies.push(newEnemy);
		
	}
	
}